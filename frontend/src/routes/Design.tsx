import React, { useEffect } from "react";
import { ThemeProvider } from '@emotion/react';
import macTheme from '../context/MacTheme'
import ResponsiveAppBar from '../component/AppBar';
import DesignCard from "../component/DesignCard";
import { useDialog } from "../hooks/useDialog";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Design = () => {
  const { showDialog } = useDialog();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleShowDialog = () => {
    showDialog(
      'Action Required', 
      'You need login first to access this page', 
      () => {navigate(`/SignIn`)},
      () => {navigate(`/`)},
  );
  };

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