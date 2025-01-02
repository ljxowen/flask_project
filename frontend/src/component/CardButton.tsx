import React from "react";
import { Box, Card, Typography, Grid2, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from 'react-router-dom';

type HoverCardButtonProps = {
  logo: string;
  largeText: string;
  onClick?: () => void; 
};



const HoverCardButton: React.FC<HoverCardButtonProps> = ({ logo, largeText, onClick }) => {
  const theme = useTheme();
  return (
    <Card
      onClick={onClick}
      sx={{
        position: "relative", 
        zIndex: 1, 
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left",
        p: 2,
        width: 350,
        height: 200,
        backgroundColor: "white",
        border: `0.5px solid ${theme.palette.primary.main}50`,
        boxShadow: 1,
        borderRadius: '0px',
        transition: "all 0.3s ease",
        transform: "scale(1)",
        '&:hover': {
          backgroundColor: theme.palette.secondary.main,
          //boxShadow: 4,
          transform: "scale(1.05)",
          zIndex: 3,
        },
        '&:hover .arrow': {
          opacity: 1,
          transform: "translateX(10px)",
        },
        "&:hover .rotating-img": {
          transform: "rotateY(180deg)", 
        },
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: theme.palette.tertiary.main,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box
          component="img"
          className="rotating-img"
          src={logo}
          alt="logo"
          sx={{ 
            width: 40, 
            height: 40,
            transition: "transform 0.8s ease",
          }}
        />
      </Box>
      <Typography variant="h4" align="left" sx={{ color: theme.palette.primary.main, paddingTop: "20px" }}>
        {largeText}
        <ArrowForwardIcon
          className="arrow"
          sx={{
            ml: 1,
            opacity: 0,
            fontSize: "1.5rem", // Make the arrow larger
            verticalAlign: "middle", // Center the arrow vertically
            transition: "all 0.3s ease",
            transform: "translateX(0)",
          }}
        />
      </Typography>
    </Card>
  );
};


const CardButton: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleDesignClick = () => {
    navigate(`/Design`);
  };

  const handleRankClick = () => {
    alert('This page not open yet');
    navigate(`/`);
  };

  return (
    <Box sx={{ marginTop: "80px", padding: "16px" }}>
      <Typography variant="h4" sx={{ fontWeight: 600, color: theme.palette.primary.main }} gutterBottom>
        Choose Your Task
      </Typography>

      <Box sx={{ flexGrow: 1, p: 2}}>
      <Grid2 container spacing={2} justifyContent="center" component="div">
        <Grid2 component="div">
          <HoverCardButton
            logo="\task_logo.png"
            largeText="Rank Questions"
            onClick={handleRankClick}
          />
        </Grid2>
        <Grid2 component="div">
          <HoverCardButton
            logo="\writing_logo.png"
            largeText="Design Questions"
            onClick={handleDesignClick}
          />
        </Grid2>
      </Grid2>
      </Box>
    </Box>
  );
};

export default CardButton;
