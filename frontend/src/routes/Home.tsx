import React from "react";
import { ThemeProvider } from '@emotion/react';
import macTheme from '../theme/mac_theme'
import ResponsiveAppBar from '../component/AppBar';
import TextIntroduction from '../component/IntroText'
import CardButton from "../component/CardButton";


const Home = () => {
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
