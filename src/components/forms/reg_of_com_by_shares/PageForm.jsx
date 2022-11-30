import React,{useState} from 'react'
import useFormContext from '../reg_of_com_by_shares/hooks/useFormContext'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormInputComponent from './formInputComponent';
import Box from '@mui/material/Box';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const PageForm = () => {
    const {page, setPage, data, setData} = useFormContext()
    const [completed, setCompleted] = useState({});

    const handleStep = (step) => () => {
        setPage(step);
      };

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => {
        if(page !== 2)
        setPage(prev => prev + 1)
    }
        
  return (
    <div className='py-10 shadow-md rounded-md mx-32 h-full'>
        <header className='grid justify-center'>
            <span className=' text-2xl uppercase font-semibold text-yellow-600'>Application to register a company with shares</span>
            <div className='grid justify-center'>
                <div className='flex md: flex-col text-base'>
                    <span>THE COMPANIES ACT, 2019 (ACT 992)</span>
                    <span className='grid justify-center'>FORM 3</span>
                </div>
            </div>
        </header>
        <div className='mx-5 md:mx-64 mt-10'>
            <Stepper  activeStep={page}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            <div className="hidden sm:block">{label}</div>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </div>
        <form>
            <FormInputComponent/>

            <div>
                <React.Fragment>
                    <div className='flex justify-center gap-4'>
                        <Button
                            variant='contained'
                            disabled={page === 0}
                            onClick={handlePrev}
                            
                        >
                            Back
                        </Button>
                        <Button  onClick={handleNext} variant='contained'>
                            Next
                        </Button>
                    </div>
                </React.Fragment>
               
            </div>
        </form>
      
    </div>
  )
}

export default PageForm
