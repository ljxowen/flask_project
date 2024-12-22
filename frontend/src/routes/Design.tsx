import React from "react";
import { ThemeProvider } from '@emotion/react';
import macTheme from '../context/MacTheme'
import ResponsiveAppBar from '../component/AppBar';
import DesignCard from "../component/DesignCard";


const Home = () => {
  return (
    <ThemeProvider theme={macTheme}>
        <React.Fragment>
            < ResponsiveAppBar />
            < DesignCard />
        </React.Fragment>
    </ThemeProvider>

  );
};

export default Home;