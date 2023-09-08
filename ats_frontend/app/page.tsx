"use client";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import Link from '@mui/material/Link';
import { TextField } from "@mui/material";
import InputLabel from "@mui/material";
import { Input, FormHelperText } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Forgate from "@/pages/Auth/Forgate";
import { useState } from "react";
import Loginanimation from "@/pages/Auth/Loginanimation";
// import { useSession } from 'next-auth/client'
export default function Home() {
  const [forgateShow, SetforgateShow] = useState(false);
  const [SignUp, Setsignup] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  // const { data: session } = getSession()
  // console.log('const',session);

  function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        Zecdata Technology Pvt. Ltd. All Rights Reserved.
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const handleApply = (formValue: any) => {
    console.log(formValue.formStatuses);
    if (formValue?.formStatuses) {
      SetforgateShow(true)
      console.log(formValue);
    }
  }

  return (
    <main className="main_conatainer">
      <div className="flex items-center justify-center h-screen">
        {SignUp ? (
          <Signup />
        ) : (
          forgateShow ? <Forgate /> :
            <div className="bg-white shadow-md flex" style={{ width: '750px', height: '450px', background: '#fff' }}>
              <div className="shadow-md " style={{ width: '400px', height: '450px', background: '#fff' }}>
                <div className="p-5 pl-4"><img style={{ width: '120px', background: '#fff' }} src="zecdata.png" /></div>
                <div className="ml-5">
                  <div className="text-xl font-medium mb-1">Sign in</div>
                  <span className="font-light mt-2">to access Recruit</span>
                </div>
                <div className="mt-4">
                  <Login handleApply={handleApply} />
                  <div className='pt-4 pl-52 absolute'>
                    <span className='text-gray-400 text-xs flex justify-center mt-3' >Don't have a Zecdata account? {'..'}<button style={{ color: '#004998' }} onClick={() => Setsignup(true)} className='primary' >Sign Up Now</button></span>
                    <Copyright sx={{ mt: 8 }} className='text-xs' />
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-md p-8" style={{ width: '350px', height: '450px' }}>
                <Loginanimation />
              </div>
            </div>
        )}
      </div>
    </main>
  );
}