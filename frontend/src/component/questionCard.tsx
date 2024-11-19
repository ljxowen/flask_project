import React, { useState } from 'react';
import {
  Container,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
} from '@mui/material';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const Questionnaire: React.FC = () => {
  const questions: Question[] = [
    { id: 1, question: 'Do you like cat？', options: ['level1', 'level2'] },
    { id: 2, question: 'What is the content of the movie？', options: ['level1', 'level2'] },
    { id: 3, question: 'How is your day？', options: ['level1', 'level2'] },
    { id: 4, question: 'Can you play soccer？', options: ['level1', 'level2'] },
    { id: 5, question: 'Good？', options: ['level1', 'level2'] },
    { id: 6, question: 'Do you like it？', options: ['level1', 'level2'] },
  ];

  const [currentPage, setCurrentPage] = useState<number>(0);
  const questionsPerPage = 3;
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleNextPage = () => {
    if (currentPage < Math.ceil(questions.length / questionsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleOptionChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Question Rank
      </Typography>
      <Box display="flex" flexDirection="column">
        {currentQuestions.map((q) => (
          <FormControl
            component="fieldset"
            key={q.id}
            sx={{ marginBottom: 1.5 }} // 控制间距
          >
            <FormLabel component="legend" sx={{ color: 'text.primary', textAlign: 'left'}}>{q.question}</FormLabel>
            <RadioGroup
              value={answers[q.id] || ''}
              onChange={(e) => handleOptionChange(q.id, e.target.value)}
            >
              {q.options.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        ))}
      </Box>
      <div style={{ marginTop: '16px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          style={{ marginRight: '8px' }}
        >
          上一页
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil(questions.length / questionsPerPage) - 1}
        >
          下一页
        </Button>
      </div>
    </Container>
  );
};

export default Questionnaire;
