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


const convertToQuestionList = (questionCards: QuestionCardData[]): QuestionList => {
  return {
    questions: questionCards.map((card) => ({
      id: card.id,
      question: card.data.question,
      description: card.data.description,
      is_open: card.data.questionType === 'open', 
      answer: card.data.answer,
    })),
  };
};

const Design = () => {
  const { showDialog } = useDialog();
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleShowDialog = () => {
    showDialog(
      'Action Required', 
      'You need login first to access this page', 
      () => {navigate(`/SignIn`)},
      () => {navigate(`/`)},
    );
  }

  const handleSubmitQuestions = async (questionCards: QuestionCardData[]) => {
    try {
      setLoading(true);
      const body: QuestionList = convertToQuestionList(questionCards);
      await QuestionsService.postApiQuestionCreateQuestions({ body });
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
    if (!isAuthenticated) {
      handleShowDialog();
    }
  }, [isAuthenticated])

  return (
    <ThemeProvider theme={macTheme}>
        <React.Fragment>
            < ResponsiveAppBar />
            < DesignCard />
        </React.Fragment>
    </ThemeProvider>

  );
};

export default Design;