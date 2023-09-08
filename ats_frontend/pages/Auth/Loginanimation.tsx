import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: '/passwordless_illustration2x.png',
    heading: 'Passwordless sign-in',
    description:
      'Experience the convenience of passwordless sign-in. With our advanced security measures, your account is now more secure than ever.',
  },
  {
    imgPath: '/mfa_illustration2x.png',
    heading: 'MFA for all accounts',
    description: 'Elevate your account security with OneAuth 2FA. Safeguard your online presence and take control of your digital identity.',
  },
  {
    imgPath: '/images-removebg-preview.png',
    heading: 'Enhanced sign-in security',
    description: 'Upgrade your sign-in experience with enhanced security features. goodbye password vulnerabilities and embrace a new era of access control.',
  },
];


function Loginanimation() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.heading}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                className='justify-center'
                component="img"
                sx={{
                  height: 155,
                  display: 'block',
                  maxWidth: 200,
                  overflow: 'hidden',
                  width: '100%',
                  marginLeft: '3rem',
                }}
                src={step.imgPath}
                alt={step.heading}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Typography variant="h5" className='text-center font-semibold mt-12 text-xs'>{images[activeStep].heading}</Typography>
      <Typography className='text-center mt-5 text-xs'>{images[activeStep].description}</Typography>
      <MobileStepper
        className='justify-center mt-5'
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        backButton={null}
        nextButton={null}
      />
    </Box>
  );
}

export default Loginanimation;
