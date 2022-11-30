import React,{useState, useContext} from 'react'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Button, Tooltip } from '@mui/material';
import Details from './registerStepper/details';
import Account from './registerStepper/account';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import {useForm} from '../inputs/useForm'
import { LoadingContext } from '../../App';
import { isValidEmail, isValidPassword } from '../lib/inputValidations';
import Zoom from '@mui/material/Zoom';
// import IconButton from '@mui/material/IconButton';


const formValue={
    name: '',
    email: '',
    password:'',
    confirmPassword:'',
    contact: ''
}

const RegisterPage = (props) => {
    const {setLogin, setAlert} = props
    const {values,resetForm, handleInputChange} = useForm(formValue)
    const [activeStep, setActiveStep] = useState(0);
    const theme = useTheme();
    const setLoading = useContext(LoadingContext)
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        confirmPassword: false
    })
    const forms = [
        <Details values={values} handleInputChange={handleInputChange} emailError={errors.email}/>, 
        <Account values={values} handleInputChange={handleInputChange} passwordError={errors.password} confirmPasswordError={errors.confirmPassword}/>

    ]


    const handleNext = () => {
        if(values.name!=="" && isValidEmail(values.email)){
            setErrors({
                ...errors, email: false
            })

            if(activeStep !==1 ){
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }else{
                if(isValidPassword(values.password)){
                    
                    if(values.password === values.confirmPassword){
                        setErrors({
                            ...errors, confirmPassword: false, password:false
                        })
                        try{
                            setLoading(true)
                            console.log(values)
                            setLogin(true)
                            setAlert({
                                open: true,
                                text: 'Succesfully registered an account',
                                status: 'success'
                            })
        
                        }catch(err){
                            if(err)
                            setAlert({
                                open: true,
                                text: err?.message,
                                status: 'error'
                            })
                        }
                        resetForm()
                        setLoading(false)
                    }else{
                        setErrors({
                            ...errors, confirmPassword: true, password:false
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
    <div className='pb-10  '>
        <div className='relative '>
            <div className=' absolute  right-0 p-4' >
                <Tooltip arrow  title="Back to Login" placement="left" TransitionComponent={Zoom}>
                    <button
                        className='bg-[#1976D2] hover:bg-blue-800 text-white rounded-full w-6 h-6 '
                        onClick={_ => setLogin(true)}
                        >
                        <KeyboardArrowLeft sx={{fontSize: 20}} className="-mt-1 mr-0.5"/> 
                    </button>
                </Tooltip>   
            </div>
        </div>
        
        <div className='px-12 pt-10'>
            <div className='flex gap-2 text-2xl text-gray-700 justify-center font-semibold'>
                <AppRegistrationIcon sx={{fontSize: 30}}/>
                <span className='-mt-1'>Register</span>
            </div>
            <>
                {forms[activeStep]}
            </>
            <div className='mt-4'>
                <MobileStepper
                    variant="dots"
                    steps={forms.length}
                    position="static"
                    activeStep={activeStep}
                    sx={{ maxWidth: 400, flexGrow: 1 }}
                    nextButton={
                        <Button size="small" onClick={handleNext}>
                            {activeStep === 1 ? 'Submit' : 'Next'}
                        
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

export default RegisterPage
