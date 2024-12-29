import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

export interface QuestionCardData {
  id: number;
  data: {
    question: string;
    description: string;
    questionType: 'open' | 'closed';
    answer: string;
  };
  isEditing: boolean;
}

interface DesignQuestionCardProps {
  handleSubmit: (questionCards: QuestionCardData[]) => void;
  loading: boolean;
}

const DesignQuestionCard: React.FC<DesignQuestionCardProps> = ({ handleSubmit, loading }) => {
  const [questionCards, setQuestionCards] = useState<QuestionCardData[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionCardData>({
    id: Date.now(),
    data: {
      question: '',
      description: '',
      questionType: 'open',
      answer: '',
    },
    isEditing: false,
  });

  const handleAddQuestion = () => {
    if (currentQuestion.data.question.trim() === '') {
      alert('Question Can Not Be Empty!');
      return;
    }
    if (currentQuestion.data.description.trim() === '') {
      alert('Rate & Description Can Not Be Empty!');
      return;
    }
    if (currentQuestion.data.answer.trim() === '') {
      alert('Answer Can Not Be Empty!');
      return;
    }

    setQuestionCards((prev) => [
      { ...currentQuestion, isEditing: false },
      ...prev,
    ]);
      setCurrentQuestion({
        id: Date.now(),
        data: {
          question: '',
          description: '',
          questionType: 'open',
          answer: '',
        },
        isEditing: false,
      });
  };

  

  const handleDeleteQuestion = (id: number) => {
    setQuestionCards((prev) => prev.filter((card) => card.id !== id));
  };

  const handleEditQuestion = (id: number) => {
    setQuestionCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isEditing: !card.isEditing } : card
      )
    );
  };

  const handleSaveQuestion = (id: number, updatedCard: QuestionCardData) => {
    setQuestionCards((prev) =>
      prev.map((card) => (card.id === id ? { ...updatedCard, isEditing: false } : card))
    );
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '20px auto' }}>
      <Card sx={{ marginBottom: 3, padding: 2 }}>
        <CardContent>
          <Typography 
            variant="h5" 
            color="primary" 
            sx={{ fontWeight: 'bold' }} 
            gutterBottom
          >
            Question Design
          </Typography>
          <TextField
            label="Question"
            variant="outlined"
            fullWidth
            margin="normal"
            value={currentQuestion.data.question}
            onChange={(e) =>
              setCurrentQuestion({ 
                ...currentQuestion, 
                data: {
                  ...currentQuestion.data,
                  question: e.target.value,
                },
              })
            }
            multiline
            rows={3}
            sx={{
              '& .MuiInputBase-root': {
                resize: 'vertical',
                overflow: 'auto',
              },
            }}
          />
          <FormControl fullWidth margin="normal" sx={{ marginTop: 2 }}>
            <InputLabel id="question-type-label">Question Type</InputLabel>
            <Select
              labelId="question-type-label"
              value={currentQuestion.data.questionType}
              onChange={(e) =>
                setCurrentQuestion({
                  ...currentQuestion,
                  data: {
                    ...currentQuestion.data,
                    questionType: e.target.value as 'open' | 'closed',
                  },
                })
              }
              label="Question Type"
            >
              <MenuItem value="open">Open-Ended</MenuItem>
              <MenuItem value="closed">Close-Ended</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Rating & Description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={currentQuestion.data.description}
            onChange={(e) =>
              setCurrentQuestion({
                 ...currentQuestion, 
                 data : {
                  ...currentQuestion.data,
                  description: e.target.value 
                 },
              })
            }
            multiline
            rows={5}
            sx={{
              '& .MuiInputBase-root': {
                resize: 'vertical',
                overflow: 'auto',
              },
            }}
          />
          <TextField
            label="Answer"
            variant="outlined"
            fullWidth
            margin="normal"
            value={currentQuestion.data.answer}
            onChange={(e) =>
              setCurrentQuestion({ 
                ...currentQuestion, 
                data: {
                  ...currentQuestion.data,
                  answer: e.target.value, 
                },
              })
            }
            multiline
            rows={5}
            sx={{
              '& .MuiInputBase-root': {
                resize: 'vertical',
                overflow: 'auto',
              },
            }}
          />
          <Button
            variant="contained"
            endIcon={<AddIcon />}
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={handleAddQuestion}
          >
            Add New
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            //onClick={console.log("clicked")}
          >
            Submit
          </Button>
        </CardContent>
      </Card>

      {questionCards.map((card) => (
        <Card key={card.id} sx={{ marginBottom: 2, padding: 2 }}>
          <CardContent>
            {card.isEditing ? (
              <>
                <TextField
                  label="Question"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={card.data.question}
                  onChange={(e) =>
                    setQuestionCards((prev) =>
                      prev.map((c) =>
                        c.id === card.id ? { 
                          ...c, 
                          data: {
                            ...c.data,
                            question: e.target.value,
                          },
                        } : c
                      )
                    )
                  }
                  multiline
                  rows={1}
                  sx={{
                    '& .MuiInputBase-root': {
                      resize: 'vertical',
                      overflow: 'auto',
                    },
                  }}
                />
                <FormControl fullWidth margin="normal" sx={{ marginTop: 2 }}>
                  <InputLabel id="question-type-label">Question Type</InputLabel>
                  <Select
                    labelId="question-type-label"
                    value={card.data.questionType}
                    onChange={(e) =>
                      setQuestionCards((prev) =>
                        prev.map((c) =>
                          c.id === card.id ? { 
                            ...c, 
                            data: {
                              ...c.data,
                              questionType: e.target.value as 'open' | 'closed',
                            },
                          } : c
                        )
                      )
                    }
                    label="Question Type"
                  >
                    <MenuItem value="open">Open-Ended</MenuItem>
                    <MenuItem value="closed">Close-Ended</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Rating & Description"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={card.data.description}
                  onChange={(e) =>
                    setQuestionCards((prev) =>
                      prev.map((c) =>
                        c.id === card.id ? { 
                          ...c, 
                          data: {
                            ...c.data,
                            description: e.target.value,
                          },
                        } : c
                      )
                    )
                  }
                  multiline
                  rows={3}
                  sx={{
                    '& .MuiInputBase-root': {
                      resize: 'vertical',
                      overflow: 'auto',
                    },
                  }}
                />
                <TextField
                  label="Answer"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={card.data.answer}
                  onChange={(e) =>
                    setQuestionCards((prev) =>
                      prev.map((c) =>
                        c.id === card.id ? { 
                          ...c, 
                          data: {
                            ...c.data,
                            answer: e.target.value,
                          },
                        } : c
                      )
                    )
                  }
                  multiline
                  rows={3}
                  sx={{
                    '& .MuiInputBase-root': {
                      resize: 'vertical',
                      overflow: 'auto',
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginTop: 2 }}
                  onClick={() => handleSaveQuestion(card.id, card)}
                >
                  Save
                </Button>
              </>
            ) : (
              <>
                <Typography variant="body1" color="primary" gutterBottom>
                  Ques：{card.data.question}
                </Typography>
                <Typography variant="body2" color="primary" gutterBottom>
                  Type：{card.data.questionType}
                </Typography>
                <Typography variant="body2" color="primary" gutterBottom>
                  Rat & Des：{card.data.description}
                </Typography>
                <Typography variant="body2" color="primary" gutterBottom>
                  Ans：{card.data.answer}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <IconButton
                    edge="start"
                    color="primary"
                    onClick={() => handleEditQuestion(card.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    color="secondary"
                    onClick={() => handleDeleteQuestion(card.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default DesignQuestionCard;
