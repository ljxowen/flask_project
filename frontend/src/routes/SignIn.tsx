import * as React from 'react';
import SignInCard from '../component/SignInCard'
import ResponsiveAppBar from '../component/AppBar'
import { ThemeProvider } from '@emotion/react';
import macTheme from '../theme/mac_theme'

function SignIn() {
    return (
      <ThemeProvider theme={macTheme}>
        <React.Fragment>
          < ResponsiveAppBar />
          < SignInCard />
        </React.Fragment>
      </ThemeProvider>
      );
}

export default SignIn;