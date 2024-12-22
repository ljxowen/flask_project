import * as React from 'react';
import SignInCard from '../component/SignInCard'
import ResponsiveAppBar from '../component/AppBar'
import { ThemeProvider } from '@emotion/react';
import macTheme from '../context/MacTheme'
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from 'react-router-dom';
import { message } from '../utils/message';
import { extractErrorMessage } from "../utils/apiErrorHandler"

function SignIn() {
  const [errMessage, setErrMessage] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const navigateAfterLogin = React.useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleLogin = async (email: string) => {
    try{
      setLoading(true);
      await login(email);
      navigateAfterLogin();
    } catch (error) {
      setLoading(false);
      const apiErrorMessage = extractErrorMessage(error);
      setErrMessage(apiErrorMessage);
      console.error('Login Error: ', apiErrorMessage);
      message.error(`Login Failed: ${apiErrorMessage}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ThemeProvider theme={macTheme}>
      <React.Fragment>
        < ResponsiveAppBar />
        < SignInCard onSubmit={handleLogin} loading={loading} />
      </React.Fragment>
    </ThemeProvider>
    );
}

export default SignIn;