import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import steps from './stepList';



export default function Index() { 
  const [activeStep, setActiveStep] = useState(steps.length-1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
      <div >
    <Stepper activeStep={activeStep} orientation="vertical">

      {steps.map((step, index) => (
        <Step key={step.label} >
          <StepLabel
          className='font-semibold'
            optional={
              index + 1 === steps.length ? (
                <span className='text-green-600 text-xs'>Last Step </span>
              ) : null
            }
          >
            {step.label}
          </StepLabel>
          <StepContent TransitionProps={{ unmountOnExit: true }}>
            <Box sx={{ mb: 2 }}>
              <div>
                <div>
                  <step.component />
                </div>

                <Button
                  size ='small'
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 5, mr: 3,  }}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  size ='small'
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 5, mr: 3 }}
                >
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
      ))}
    </Stepper>


    {activeStep === steps.length && (
      <Paper square elevation={0} sx={{ p: 3 }}>
        <Typography>All steps completed - you&apos;re finished</Typography>
        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
          Reset
        </Button>
      </Paper>
    )}
  
      </div>
  )
}
