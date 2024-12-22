import React from "react";
import { Box, Typography } from "@mui/material";
import Container from '@mui/material/Container';

const TextIntroduction = () => {
  return (
    <Container maxWidth="xl">
      <Box
          component="img"
          src="\m24_eng_dark_v2.png"
          alt="Mac Logo"
          sx={{
            width: '600px',
            padding: "50px"
          }}
      />
      <Box 
        // sx={{
        //   padding: '10px'
        // }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Open-Close Ended Question Ranking
        </Typography>
        <Typography variant="body1">
          We are conducting research to investigate the use LLMs (large language models) to improve the teaching and learning of design.
          This could be a long-term collaboration, but our immediate goal is to create tools to help students learn about the different types of questions expert interviewers use to conduct initial interviews to understand their users and identify problem areas. Our first goals are:
  
          (1) to create a set of questions and transcripts of conversations for use in teaching and research;
          
          (2) to create an interactive question analyzer which will rate a question on openness/closedness, likelihood to elicit procedural details, likelihood to elicit emotional connection to a problem, etc.
          
          We also have ideas for intermediate-term goals, including
          
          (3) create a chatbot interface where a chatbot interviews the students, in which students pick one of a set of personas, and attempt to answer from that point of view, with the chatbot both asking follow-up questions and providing simple visual feedback in a sidebar to indicate which types of information they are getting.   
          
          But if you are involved in training others, or have reflected on your own journey to becoming a designer, you may have better ideas, which we would welcome.
        </Typography>
      </Box>
    </Container>

  );
};

export default TextIntroduction;
