import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepLabel from '@mui/material/StepLabel';
import customPaginate from './hooks/customPaginate'
import steps from './stepList';
import { useSearchParams } from 'react-router-dom';

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [searchParams,setsearchParams] =useSearchParams()

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return activeStep;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      !isLastStep() && changeSearchParams(activeStep + 1)
  };
  
  const changeSearchParams = (index) =>{
    setsearchParams({'current':steps[index].label.split(' ').join('').toLowerCase()})
  }

  const handleBack = () => {
    changeSearchParams(activeStep - 1)
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  
  const handleStepIndex = (plabel) =>{
     return steps.findIndex((step) => step.label == plabel)
  }

  const handleCompleted = (plabel) =>{
      let indexofProvided = handleStepIndex(plabel)
      let indexofcurrentitem = handleStepIndex(steps[activeStep].label)
      return (indexofProvided < indexofcurrentitem)
  }

  const handleActiveStep = (plabel) =>{
      return steps[activeStep].label == plabel
  }
  
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  let StepLabels = () =>{
    return(
      <Stepper    alternativeLabel >
      {customPaginate(steps,activeStep,3).map((step, index) => (
        <Step key={step.label} index={handleStepIndex(step.label)} active={handleActiveStep(step.label) }  completed={handleCompleted(step.label)}>
          <StepButton color="inherit" onClick={handleStep( )}>
            {step.label}
          </StepButton>
        </Step>
      ))}
    </Stepper>
    )
  }

  React.useEffect(()=>{
    if(searchParams.get('current')){
     let currentIndex =  steps.findIndex((step)=>step.label.split(' ').join('').toLowerCase() == searchParams.get('current'))
      setActiveStep(currentIndex)
    }
  },[searchParams.get('current')]) 

  return (
    <Box  className='w-full overflow-hidden min-h-screen flex flex-col gap-5'>
  
        <StepLabels />
    
      <div className=''>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          
            <div className=" flex flex-col gap-5 overflow-hidden  h-full justify-between ">
            <div className='flex-grow h-full  '>
                {steps.map((step, i) => <nav className='h-full flex-grow' key={i}>
                  {i === activeStep && < step.component />}
                </nav>)}
              </div>
              
            <div className=' h-full'>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (allStepsCompleted() ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
            </div>
  </div>    
     
        )}
      </div>
    </Box>
  );
}
