import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  //height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  //height: 'calc(100vh - 70px)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
  },
}));

interface SignUpCardProps {
  onSubmit: (email: string, first_name: string, last_name: string) => void;
  loading: boolean;
}

const SignUpCard: React.FC<SignUpCardProps> = ({ onSubmit, loading }) => {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [reEmailError, setReEmailError] = React.useState(false);
  const [reEmailErrorMessage, setReEmailErrorMessage] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState('');

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const re_email = document.getElementById('re-email') as HTMLInputElement;
    const first_name = document.getElementById('first_name') as HTMLInputElement;
    const last_name = document.getElementById('last_name') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!re_email || re_email.value !== email.value) {
      setReEmailError(true);
      setReEmailErrorMessage("Email dosen't match");
      isValid = false;
    } else {
      setReEmailError(false);
      setReEmailErrorMessage('');
    }

    if (!first_name.value || first_name.value.length < 1) {
      setFirstNameError(true);
      setFirstNameErrorMessage('First Name is required.');
      isValid = false;
    } else {
      setFirstNameError(false);
      setFirstNameErrorMessage('');
    }

    if (!last_name.value || last_name.value.length < 1) {
      setLastNameError(true);
      setLastNameErrorMessage('Last Name is required.');
      isValid = false;
    } else {
      setLastNameError(false);
      setLastNameErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // if (nameError || emailError) {
    //   event.preventDefault();
    //   return;
    // }
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const first_name = data.get("first_name");
    const last_name = data.get("last_name");

    if (
      email && first_name && last_name &&
      typeof email === "string" &&
      typeof first_name === "string" &&
      typeof last_name === "string"
    ) {
      console.log({
        email: email,
        first_name: first_name,
        last_name: last_name,
      });

      onSubmit(email, first_name, last_name);
    } else {
      console.log("input data is not valid");
    }
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      {/* <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} /> */}
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card sx={{ boxShadow: 'none', border: 'none' }}>
          <Box
            component="img"
            src="\m24_bw_dark.png"
            alt="Mac Logo"
            sx={{
              width: '250px',
            }}
          />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Re-Enter Email</FormLabel>
              <TextField
                required
                fullWidth
                id="re-email"
                placeholder="your@email.com"
                name="re-email"
                autoComplete="email"
                variant="outlined"
                error={reEmailError}
                helperText={reEmailErrorMessage}
                color={reEmailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="first_name">First name</FormLabel>
              <TextField
                autoComplete="given_name"
                name="first_name"
                required
                fullWidth
                id="first_name"
                placeholder="First Name"
                error={firstNameError}
                helperText={firstNameErrorMessage}
                color={firstNameError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="last_name">Last name</FormLabel>
              <TextField
                autoComplete="family_name"
                name="last_name"
                required
                fullWidth
                id="last_name"
                placeholder="Last Name"
                error={lastNameError}
                helperText={lastNameErrorMessage}
                color={lastNameError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive updates via email."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
              disabled={loading}
              startIcon={loading ? <CircularProgress/> : null}
            >
              Sign up
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <MuiLink
                component={RouterLink}
                to={`/SignIn`}
              >
                Sign In
              </MuiLink>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </>
  );
}

export default SignUpCard;