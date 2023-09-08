'use client'


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react';
import server from '@/utils';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation'

type Props = {
  handleApply: Function;
};

const Login = (props: Props) => {
  const { handleApply } = props;
  const [forgate, Setforgate] = useState(false);
  let router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get('username_or_email');
    let password = data.get('password')
    axios.post(`${server}/api/organization/login`, { email, password }).then((res) => {
      console.log('Response', res);
      if (res.data.body.status === 'KO') {
        toast.error(res.data.body.message);
      } else {
        if (res.data.body.status === "success") {
          console.log("success");
          router.push('/clients')
        }
      }
    }).catch((err) => {
      console.log('err', err);
    })
  };

  handleApply({ formStatuses: forgate });
  const theme = createTheme({
    palette: {
      primary: {
        main: '#007bff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme} >
      <Toaster position="top-center" richColors closeButton />
      <Container component="main" maxWidth="xs" className=''>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} className='text-center'>
            <TextField
              className='mt-0'
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="username_or_email"
              autoComplete="email"
              autoFocus
              variant="standard"
              type='email'
            />
            <TextField
              className='mb-5'
              id="standard-password-input"
              label="Password"
              type="password"
              name="password"
              required
              fullWidth
              autoComplete="current-password"
              variant="standard"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mb: 2 }}
              style={{ background: '#007bff' }}
            >
              Sign In
            </Button>
            <Grid >
              <button style={{ color: '#004998' }} onClick={() => Setforgate(true)}>
                Forgot password?
              </button>
            </Grid>
            <div className="flex mt-4 items-center justify-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <div className="mx-4 text-gray-400">or</div>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className='flex items-center'>
              <span className='text-gray-400 text-xs'>Sign In using</span>
            </div>
            <div className='flex mt-3 space-x-2'>
              <GoogleIcon style={{ color: '' }} />
              <FacebookIcon style={{ color: '#007bff' }} />
              <TwitterIcon style={{ color: '#20a4f4' }} />
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Login