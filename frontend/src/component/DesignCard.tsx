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
      alert('问题内容不能为空！');
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
          <Typography variant="h5" gutterBottom>
            设计问卷问题
          </Typography>
          <TextField
            label="问题"
            variant="outlined"
            fullWidth
            margin="normal"
            value={currentQuestion.question}
            onChange={(e) =>
              setCurrentQuestion({ ...currentQuestion, question: e.target.value })
            }
          />
          <FormControl fullWidth margin="normal" sx={{ marginTop: 2 }}>
            <InputLabel id="question-type-label">问题类型</InputLabel>
            <Select
              labelId="question-type-label"
              value={currentQuestion.questionType}
              onChange={(e) =>
                setCurrentQuestion({
                  ...currentQuestion,
                  questionType: e.target.value as 'open' | 'closed',
                })
              }
              label="问题类型"
            >
              <MenuItem value="open">开放式</MenuItem>
              <MenuItem value="closed">封闭式</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="问题解释"
            variant="outlined"
            fullWidth
            margin="normal"
            value={currentQuestion.description}
            onChange={(e) =>
              setCurrentQuestion({ ...currentQuestion, description: e.target.value })
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
            label="回答"
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
            添加问题
          </Button>
        </CardContent>
      </Card>

      {questionCards.map((card) => (
        <Card key={card.id} sx={{ marginBottom: 2, padding: 2 }}>
          <CardContent>
            {card.isEditing ? (
              <>
                <TextField
                  label="问题"
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
                />
                <TextField
                  label="问题解释"
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
                  label="回答"
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
                  onClick={() => handleSaveQuestion(card.id, card)}
                >
                  保存
                </Button>
              </>
            ) : (
              <>
                <Typography variant="h6" gutterBottom>
                  问题：{card.question}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  解释：{card.description}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  回答：{card.response}
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
