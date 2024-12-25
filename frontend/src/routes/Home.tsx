import React, { useEffect } from "react";
import { ThemeProvider } from '@emotion/react';
import macTheme from '../context/MacTheme'
import ResponsiveAppBar from '../component/AppBar';
import TextIntroduction from '../component/IntroText'
import CardButton from "../component/CardButton";
import { useAuth } from "../hooks/useAuth";


const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <ThemeProvider theme={macTheme}>
        <React.Fragment>
            < ResponsiveAppBar />
            < TextIntroduction />
            < CardButton />
        </React.Fragment>
    </ThemeProvider>

  );
};

export default Home;
