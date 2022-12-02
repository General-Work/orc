import React,{useState} from 'react'
import useFormContext from './hooks/useFormContext'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
// import FormInputComponent from './formInputComponent';
import StepContent from '@mui/material/StepContent';
import stepsList from './stepList'
import Payment from '../../layout/paymentView/index' 



const PageForm = () => {
    const {page, setPage, data, setData} = useFormContext()
    const [completed, setCompleted] = useState({});
    const [paymentOpen, setPaymentOpen] = useState(false)
   
    const handlePrev = () => {
      setPage((prev) => prev - 1);
    };
   

    const handleNext = () => {
        // if(page !== 7)
        setPage((prev) => prev + 1);
    }
        
  return (

    <div className=' mx-4 md:mx-32  overflow-y-auto '>
        <div className='mx-5  py-4'>
            <Stepper activeStep={page}  orientation="vertical">

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
                
                        <div className='md:mx-10'>
                            <div>
                                <step.component />
                            </div>

                            <Button
                                size ='small'
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 5, mr: 3,  }}
                            >
                                {index === stepsList.length - 1 ? 'Finish' : 'Continue'}
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
            {page === stepsList.length && (
                <div className='my-4'>
                    <div className='font-semibold  text-red-600'>Make payment for application</div>
                    <button onClick={_ => setPaymentOpen(true)} className='bg-green-500 hover:bg-green-800 text-white rounded-md p-2 my-3'>
                        Payment
                    </button>
                </div>
            )}

            {paymentOpen && 
                <Payment 
                    paymentOpen={paymentOpen}
                    paymentClose={_ => setPaymentOpen(false)}
                />
            }

            
        </div>
    
    </div>

 
  )
}

export default PageForm
