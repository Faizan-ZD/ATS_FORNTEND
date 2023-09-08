import React from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

export default function Forgate() {
  function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" style={{ marginTop: '12rem' }} {...props}>
        {'Copyright © '}
        Zecdata Technology Pvt. Ltd. All Rights Reserved.
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: '#007bff',
      },
    },
  });

  return (
    <div className="bg-white  shadow-md" style={{ width: '500px', height: '500px', background: '#fff' }}>
      <div className="p-8"><img style={{ width: '120px', background: '#fff' }} src="zecdata.png" /></div>
      <div className="ml-10">
        <div className="text-xl font-medium mb-5">Forgot Password</div>
        <span className=" text-sm">
          Enter your registered email address, mobile number, or username to
          change your Zecdata account password.
        </span>
        <ThemeProvider theme={theme}>
          <Container component="main" className='pl-0'>
            <Box component="form" className='text-center'>
              <TextField
                className='mb-10 ml-0'
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                variant="standard"
                type='email'
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ background: '#007bff' }}
              >
                Next
              </Button>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
      <Copyright />
    </div>
  )
}