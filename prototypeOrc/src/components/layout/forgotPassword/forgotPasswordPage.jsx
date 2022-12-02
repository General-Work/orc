import React,{useState, useContext} from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ProvideEmail from './provideEmail'
import { Button, Tooltip } from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import NewPassword from './newPassword';
import EmailCode from './emailCode';
import { useForm } from '../../inputs/useForm';
import { isValidEmail, isValidPassword } from '../../lib/inputValidations';
import { LoadingContext } from '../../../App';
import Zoom from '@mui/material/Zoom';



const formValues = {
    email: '',
    code: '',
    password: '',
    confirmPassword: ''
}
const ForgotPasswordPage = (props) => {
    const {setForgotPassword, setAlert} = props
    const [activeStep, setActiveStep] = useState(0);
    const theme = useTheme();
    const {values, resetForm, handleInputChange} = useForm(formValues)
    const setLoading = useContext(LoadingContext)
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        confirmPassword: false
    })
    const forms = [
        <ProvideEmail emailError={errors.email} values={values.eamil} handleInputChange={handleInputChange}/>,
        <EmailCode values={values.code} handleInputChange={handleInputChange}/>,
        <NewPassword  values={values} handleInputChange={handleInputChange} passwordError={errors.password} confirmPasswordError={errors.confirmPassword}/>
    ]

    const handleNext = () => {
        if(isValidEmail(values.email)){
            setErrors({
                ...errors, email: false
            })
            if(activeStep !== 2){
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
            }else{
                if(isValidPassword(values.password)){
                    if(values.password === values.confirmPassword){
                        setErrors({
                            ...errors, confirmPassword: false, password: false
                        })
                        try {
                            setLoading(true)
                            setForgotPassword(false)
                            setAlert({
                                open: true,
                                text: 'Successfully changed password',
                                status: 'success'
                            })
                            resetForm()

                        }catch(err){
                            if (err)
                                setAlert({
                                    open: true,
                                    text: err?.message,
                                    status: 'error'
                                })

                        }
                        setLoading(false)

                    }else{
                        setErrors({
                            ...errors, confirmPassword: true, password: false
                        })
                    }

                }else{
                    setErrors({
                        ...errors, password: true
                    })
                   
                }
            }
        }else{
            setErrors({
                ...errors, email: true
            })
        }
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
  return (
    <div className='pb-10 '>
        <div className='relative '>
            <div className=' absolute  right-0 p-4' >
                <Tooltip arrow  title="Back to Login" placement="left" TransitionComponent={Zoom}>
                    <button 
                        onClick={_ => setForgotPassword(false)}
                        className='bg-[#1976D2] hover:bg-blue-800 text-white rounded-full w-6 h-6 '
                    >
                        <KeyboardArrowLeft sx={{fontSize: 20}} className="-mt-0.5 mr-0.5"/> 
                    </button>
                </Tooltip>   
            </div>
        </div>

        <div className='px-12 pt-12'>
            <div className='flex gap-2 text-2xl text-gray-600 justify-center font-semibold'>
                <LockOpenIcon sx={{fontSize: 28}}/>
                <span className='-mt-1'>Password Reset</span>
            </div>
            <>
                {forms[activeStep]}
            </>
            <div className='mt-8'>
                <MobileStepper
                
                    variant="dots"
                    steps={forms.length}
                    position="static"
                    activeStep={activeStep}
                    sx={{ maxWidth: 400, flexGrow: 1 }}
                    nextButton={
                        <Button size="small" onClick={handleNext} >
                            {activeStep === 2 ? 'Submit' : 'Next'}
                        
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0} >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                        </Button>
                    }
                />
            </div>
        </div>
        
      
    </div>
  )
}

export default ForgotPasswordPage
