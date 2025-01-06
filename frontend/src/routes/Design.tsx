import React, { useEffect } from "react";
import { ThemeProvider } from '@emotion/react';
import macTheme from '../context/MacTheme'
import ResponsiveAppBar from '../component/AppBar';
import DesignCard, { QuestionCardData } from "../component/DesignCard";
import { useDialog } from "../hooks/useDialog";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { QuestionsService, QuestionList } from "../client";
import { extractErrorMessage } from "../utils/apiErrorHandler";
import { message } from '../utils/message';
import { Typography } from "@mui/material";


const convertToQuestionList = (questionCards: QuestionCardData[], user_email: string): QuestionList => {
  return {
    questions: questionCards.map((card) => ({
      id: card.id,
      question: card.data.question,
      description: card.data.description,
      is_open: card.data.questionType === 'open', 
      answer: card.data.answer,
    })),
    user_email: user_email,
  };
};

const Design = () => {
  const { showDialog } = useDialog();
  const { isAuthenticated, user } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleShowDialog = () => {
    showDialog(
      'Action Required', 
      'You need login to access this page', 
      () => {navigate(`/SignIn`)},
      () => {navigate(`/`)},
    );
  }

  const handleSubmitQuestions = async (questionCards: QuestionCardData[]) => {
    try {
      setLoading(true);
      if (user && user.email) {
        const body: QuestionList = convertToQuestionList(questionCards, user.email);
        await QuestionsService.postApiQuestionCreateQuestions({ body });
      }
    } catch (error) {
      setLoading(false);
      const apiErrorMessage = extractErrorMessage(error);
      console.error("Failed to submit question");
      message.error(`Failed to submit: ${apiErrorMessage}`);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    if (isAuthenticated === false) {
      handleShowDialog();
    }
  }, [isAuthenticated])

  return (
    <ThemeProvider theme={macTheme}>
      <React.Fragment>
          < ResponsiveAppBar />
            {isAuthenticated ? (
              < DesignCard handleSubmit={handleSubmitQuestions} loading={loading} />
            ): (
              <Typography variant="h4" padding="50px"> 
              You need login to access this page  
            </Typography>
            )}
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Design;