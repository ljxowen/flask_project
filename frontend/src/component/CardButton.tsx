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
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left",
        p: 2,
        width: 220,
        height: 120,
        backgroundColor: "white",
        boxShadow: 1,
        transition: "all 0.3s ease",
        transform: "scale(1)",
        '&:hover': {
          backgroundColor: theme.palette.secondary.main,
          boxShadow: 4,
          transform: "scale(1.05)",
        },
        '&:hover .arrow': {
          opacity: 1,
          transform: "translateX(10px)",
        },
      }}
    >
      <Box
        sx={{
          width: 70,
          height: 70,
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
          src={logo}
          alt="logo"
          sx={{ width: 40, height: 40 }}
        />
      </Box>
      <Typography variant="h6" fontWeight="bold" align="left" sx={{ color: theme.palette.primary.main }}>
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

  const handleDesignClick = () => {
    navigate(`/Design`);
  };

  const handleRankClick = () => {
    navigate(`/`);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid2 container spacing={2} justifyContent="center" component="div">
        <Grid2 component="div">
          <HoverCardButton
            logo="\task_logo.png"
            largeText="Rank Question"
            onClick={handleRankClick}
          />
        </Grid2>
        <Grid2 component="div">
          <HoverCardButton
            logo="\writing_logo.png"
            largeText="Design Question"
            onClick={handleDesignClick}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default CardButton;
