import React,{useState} from 'react'
import useFormContext from './hooks/useFormContext'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
// import FormInputComponent from './formInputComponent';
import StepContent from '@mui/material/StepContent';
import stepsList from './stepList' 



const PageForm = () => {
    const {page, setPage, data, setData} = useFormContext()
    const [completed, setCompleted] = useState({});

   
    const handlePrev = () => {
      setPage((prev) => prev - 1);
    };
   

    const handleNext = () => {
        // if(page !== 7)
        setPage((prev) => prev + 1);
    }
        
  return (

    <div className='  mx-32  overflow-y-auto'>
        <div className='mx-5  mt-10'>
            <Stepper activeStep={page} orientation="vertical">

                {stepsList.map((step, index) => (
                <Step key={step.label} >
                    <StepLabel
                    className='font-semibold'
                    optional={
                        index + 1 === step.length ? (
                        <span className='text-green-600 text-sm'>Last Step </span>
                        ) : null
                    }
                    >
                    {step.label}
                    </StepLabel>
                    <StepContent TransitionProps={{ unmountOnExit: false }}>
                
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
                            {index === step.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                            size ='small'
                            disabled={index === 0}
                            onClick={handlePrev}
                            sx={{ mt: 5, mr: 3 }}
                        >
                            Back
                        </Button>
                        </div>
                
                    </StepContent>
                </Step>
                ))}
            </Stepper>
            
        </div>
    
    </div>

 
  )
}

export default PageForm
