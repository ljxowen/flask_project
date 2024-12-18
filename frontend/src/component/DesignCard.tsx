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
import SaveIcon from '@mui/icons-material/Save';

interface QuestionCardData {
  id: number;
  question: string;
  description: string;
  questionType: 'open' | 'closed';
  response: string;
  isEditing: boolean;
}

const SurveyQuestionApp: React.FC = () => {
  const [questionCards, setQuestionCards] = useState<QuestionCardData[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionCardData>({
    id: Date.now(),
    question: '',
    description: '',
    questionType: 'open',
    response: '',
    isEditing: false,
  });

  const handleAddQuestion = () => {
    if (currentQuestion.question.trim() === '') {
      alert('Question Can Not Be Empty！');
      return;
    }

    setQuestionCards((prev) => [
      { ...currentQuestion, isEditing: false },
      ...prev,
    ]);
    setCurrentQuestion({
      id: Date.now(),
      question: '',
      description: '',
      questionType: 'open',
      response: '',
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
            value={currentQuestion.question}
            onChange={(e) =>
              setCurrentQuestion({ ...currentQuestion, question: e.target.value })
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
              value={currentQuestion.questionType}
              onChange={(e) =>
                setCurrentQuestion({
                  ...currentQuestion,
                  questionType: e.target.value as 'open' | 'closed',
                })
              }
              label="Question Type"
            >
              <MenuItem value="open">Open-Ended</MenuItem>
              <MenuItem value="closed">Close-Ended</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={currentQuestion.description}
            onChange={(e) =>
              setCurrentQuestion({ ...currentQuestion, description: e.target.value })
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
            value={currentQuestion.response}
            onChange={(e) =>
              setCurrentQuestion({ ...currentQuestion, response: e.target.value })
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
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={handleAddQuestion}
          >
            Add New
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
                  value={card.question}
                  onChange={(e) =>
                    setQuestionCards((prev) =>
                      prev.map((c) =>
                        c.id === card.id ? { ...c, question: e.target.value } : c
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
                    value={card.questionType}
                    onChange={(e) =>
                      setQuestionCards((prev) =>
                        prev.map((c) =>
                          c.id === card.id ? { 
                            ...c, 
                            questionType: e.target.value as 'open' | 'closed' } : c
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
                  label="Description"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={card.description}
                  onChange={(e) =>
                    setQuestionCards((prev) =>
                      prev.map((c) =>
                        c.id === card.id ? { ...c, description: e.target.value } : c
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
                  value={card.response}
                  onChange={(e) =>
                    setQuestionCards((prev) =>
                      prev.map((c) =>
                        c.id === card.id ? { ...c, response: e.target.value } : c
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
                  Question：{card.question}
                </Typography>
                <Typography variant="body2" color="primary" gutterBottom>
                  Type：{card.questionType}
                </Typography>
                <Typography variant="body2" color="primary" gutterBottom>
                  Description：{card.description}
                </Typography>
                <Typography variant="body2" color="primary" gutterBottom>
                  Answer：{card.response}
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

export default SurveyQuestionApp;
