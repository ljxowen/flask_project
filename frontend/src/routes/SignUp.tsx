import * as React from 'react';
import SignUpCard from '../component/SignUpCard'
import ResponsiveAppBar from '../component/AppBar'
import { ThemeProvider } from '@emotion/react';
import macTheme from '../context/MacTheme'
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from 'react-router-dom';
import { Alert, Box } from '@mui/material'
import { UsersService } from '../client';
import { message } from '../utils/message';
import { extractErrorMessage } from "../utils/apiErrorHandler"

function SignUp() {
  const [errMessage, setErrMessage] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const navigateAfterLogin = React.useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleSignUp = async (email: string, first_name: string, last_name: string) => {
    try {
      setLoading(true);
      const user = await UsersService.postApiUserCreateUser({ body: {email, first_name, last_name} });
      if (user) {
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
    } catch (error: any) {
      setLoading(false);
      const apiErrorMessage = extractErrorMessage(error);
      setErrMessage(apiErrorMessage);
      console.error('API Error:', apiErrorMessage);
      message.error(`Create Account Failed, ${apiErrorMessage}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ThemeProvider theme={macTheme}>
      <React.Fragment>
        < ResponsiveAppBar />
        < SignUpCard onSubmit={handleSignUp} loading={loading} />
      </React.Fragment>
    </ThemeProvider>
    );
}

export default SignUp;