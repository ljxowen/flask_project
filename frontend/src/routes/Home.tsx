import React from "react";
import { ThemeProvider } from '@emotion/react';
import macTheme from '../context/MacTheme'
import ResponsiveAppBar from '../component/AppBar';
import TextIntroduction from '../component/IntroText'
import CardButton from "../component/CardButton";


const Home = () => {
  return (
    <ThemeProvider theme={macTheme}>
        <React.Fragment>
            < ResponsiveAppBar />
            < TextIntroduction />
            < CardButton />s
        </React.Fragment>
    </ThemeProvider>

  );
};

export default Home;
