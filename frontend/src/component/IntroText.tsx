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
        sx={{
        //   padding: '10px'
          textAlign: 'left',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold'}} gutterBottom>
          Open-Close Ended Question Ranking
        </Typography>
        <Typography variant="body1" gutterBottom>
          We are conducting research to investigate the use of LLMs (large language models) to improve the teaching and learning of design. We are recruiting professional designers, like yourself.
        </Typography>
        <Typography variant="body1" gutterBottom>
          This could be a long-term collaboration, but our immediate goal is to create tools to help students learn about the different types of questions expert interviewers use to conduct initial interviews to understand their users and identify problem areas. Our first goals are:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" gutterBottom>
              To create a set of questions and transcripts of conversations for use in teaching and research.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom>
              To create an interactive question analyzer which will rate a question on openness/closedness, likelihood to elicit procedural details, likelihood to elicit emotional connection to a problem, etc.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" gutterBottom>
          We also have ideas for intermediate-term goals, including:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" gutterBottom>
              Creating a chatbot interface where a chatbot interviews the students. Students pick one of a set of personas and attempt to answer from that point of view, with the chatbot both asking follow-up questions and providing simple visual feedback in a sidebar to indicate which types of information they are getting.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" gutterBottom>
          But if you are involved in training others, or have reflected on your own journey to becoming a designer, you may have better ideas, which we would welcome.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '16px' }} gutterBottom>
          What are we asking?
        </Typography>
        <Typography variant="body1" gutterBottom>
          In the short-term, we would be asking you to contribute questions to a question database, and then rank a subset of those questions along different axes, such as openness/closedness. There will be no “good/bad” ranking. Depending how the ranking exercise goes, we may ask you to join a focus group to resolve differences. Next we will ask you to participate in testing.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold'}} gutterBottom>
          What will you get out of it?
        </Typography>
        <Typography variant="body1" gutterBottom>
          You will be listed as an author of the question database when it is open-sourced, and submitted as a journal/conference paper.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold'}} gutterBottom>
          How long will this take?
        </Typography>
        <Typography variant="body1" gutterBottom>
          We ask for a 40 hour commitment.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold'}} gutterBottom>
          What if I have to cut back my commitment?
        </Typography>
        <Typography variant="body1" gutterBottom>
          If life gets in the way, and you need to drop out, but have made a substantial commitment, you will still be listed as an author, if you so choose. 
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold'}} gutterBottom>
          What if I want to do more?
        </Typography>
        <Typography variant="body1" gutterBottom>
          When we get past the database development phase, we will let all members of the network know about additional opportunities to get involved.
        </Typography>
      </Box>
    </Container>

  );
};

export default TextIntroduction;
