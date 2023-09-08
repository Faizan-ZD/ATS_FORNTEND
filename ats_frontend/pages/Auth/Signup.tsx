import * as React from 'react'
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
// type Props = {
//     handleApply: Function;
// };

export default function Signup() {
    // const { handleApply } = props;
    // const [Signup, Setsignup] = useState(false);

    function Copyright(props: any) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" style={{ marginTop: '4rem' }} {...props}>
                {'Copyright © '}
                Zecdata Technology Pvt. Ltd. All Rights Reserved.
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
    // handleApply({ signupStatuses: Signup });
    console.log('Signup', Signup);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log('signupdata', data);
        let data1 = data.get('name, website')
        console.log(data1);


        axios.post(`${server}/api/organization`, {}).then((res) => {
            console.log('Response', res);
        }).catch((err) => {
            console.log('err', err);
        })
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#007bff',
            },
        },
    });

    return (
        <div className="bg-white  shadow-md" style={{ width: '500px', height: '650px', background: '#fff' }}>
            <div className="p-8 "><img style={{ width: '120px', background: '#fff' }} src="zecdata.png" /></div>
            <div className="ml-10">
                <div className="text-xl font-medium mb-8">Create your Organization account</div>
                <ThemeProvider theme={theme}>
                    <Container component="main" className='pl-0'>
                        <Box component="form" className='text-center' onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="name"
                                        name="name"
                                        label="Name"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="website"
                                        name="website"
                                        label="Website"
                                        fullWidth
                                        autoComplete="family-name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="email"
                                        name="email"
                                        type='email'
                                        label="Email Address"
                                        fullWidth
                                        autoComplete="email"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="gst_no"
                                        label="Gst_No"
                                        type="text"
                                        id="password"
                                        autoComplete="new-password"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="address-level"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type='number'
                                        id="number"
                                        name="number"
                                        label="Mobile number"
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item >
                                    <FormControlLabel
                                        control={<Checkbox required className='' color="primary" name="agree" value="yes" />}
                                        label={<span style={{ fontSize: '11px' }}>I agree to the Terms of service and Privacy policies of Zecdata Technology</span>}
                                    />
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 4, ml: 3 }}
                                    style={{ background: '#007bff' }}
                                >
                                    Sign up
                                </Button>
                                <div className='grid'>
                                    <div className='flex items-center ml-8 mt-5'>
                                        <span className='text-gray-400 text-xs'>Sign up using</span>
                                    </div>
                                    <div className='mt-3 ml-7 space-x-2'>
                                        <GoogleIcon style={{ color: 'blue' }} />
                                        <FacebookIcon style={{ color: '#007bff' }} />
                                        <TwitterIcon style={{ color: '#20a4f4' }} />
                                    </div>
                                </div>
                            </Grid>
                        </Box>
                    </Container>
                </ThemeProvider>

            </div>
            <Copyright />
        </div>
    )
}




