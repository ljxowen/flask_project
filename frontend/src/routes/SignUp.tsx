import * as React from 'react';
import SignUpCard from '../component/SignUpCard'
import ResponsiveAppBar from '../component/AppBar'
import { ThemeProvider } from '@emotion/react';
import macTheme from '../theme/mac_theme'

function SignUp() {
    return (
      <ThemeProvider theme={macTheme}>
        <React.Fragment>
          < ResponsiveAppBar />
          < SignUpCard />
        </React.Fragment>
      </ThemeProvider>
      );
}

export default SignUp;