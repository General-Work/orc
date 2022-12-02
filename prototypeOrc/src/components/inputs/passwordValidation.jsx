import React, { useState,  useEffect} from 'react'

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const PasswordValidation = (props) => {
    const {password, confirmPassword, showConfirmPassword} = props
    const [hasDigits, setHasDigits] = useState(false)
    const [hasSmallLetter, setHasSmallLetter] = useState(false)
    const [hasCapitalLetter, setHassCapitalLetter] = useState(false)
    const [hasSixChar, setHasSixChar] = useState(false)
    const [hasSpecialChar, setHasSpecialChar] = useState(false)
    const [rightPassword, setRightPassword] = useState(false)

    useEffect(() => {
        if(password.trim().length > 5){
            setHasSixChar(true)
        }else{
            setHasSixChar(false)
        }
        if(/[A-Z]/.test(password)){
            setHassCapitalLetter(true)
        }else{
            setHassCapitalLetter(false)
        }
        if(/[a-z]/.test(password)){
            setHasSmallLetter(true)
        }else{
            setHasSmallLetter(false)
        }
        if(/[0-9]/.test(password)){
            setHasDigits(true)
        }else{
            setHasDigits(false)
        }
        if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)){
            setHasSpecialChar(true)
        }else{
            setHasSpecialChar(false)
        }
        if(password === confirmPassword){
            setRightPassword(true)
        }else{
            setRightPassword(false)
        }

        // if (password.trim().length > 5 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)
        //     &&  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password) &&  password === confirmPassword
        // ){
        //     setDisableBtn(false)
        // }else{
        //     setDisableBtn(true)
        // }

        
    },[password,confirmPassword])
  return (
    <div>
      {password.trim().length > 0 && 
                    <div className=''>
                        <div className={`flex gap-2 ${hasCapitalLetter ? 'text-green-600' : 'text-red-600'}`}>
                            {hasCapitalLetter ? <CheckCircleOutlineIcon/>: <ErrorOutlineIcon/>}
                            <span className="text-base">At least one capital letter</span>
                        </div>
                        <div className={`flex gap-2 ${hasDigits ? 'text-green-600' : 'text-red-600'}`}>
                            {hasDigits ? <CheckCircleOutlineIcon/>: <ErrorOutlineIcon/>}
                            <span className="text-base">At least one digit or letter</span>
                        </div>
                        <div className={`flex gap-2 ${hasSmallLetter ? 'text-green-600' : 'text-red-600'}`}>
                            {hasSmallLetter ? <CheckCircleOutlineIcon/>: <ErrorOutlineIcon/>}
                            <span className="text-base">At least one small letter</span>
                        </div>
                        <div className={`flex gap-2 ${hasSpecialChar ? 'text-green-600' : 'text-red-600'}`}>
                            {hasSpecialChar ? <CheckCircleOutlineIcon/>: <ErrorOutlineIcon/>}
                            <span className="text-base">At least one special character (Eg. +_-.$#)</span>
                        </div>
                        <div className={`flex gap-2 ${hasSixChar ? 'text-green-600' : 'text-red-600'}`}>
                            {hasSixChar ? <CheckCircleOutlineIcon/>: <ErrorOutlineIcon/>}
                            <span className="text-base">At least six characters long</span>
                        </div>
                        {showConfirmPassword && password.trim().length > 0 && confirmPassword.trim().length > 0 &&
                            <div className={`flex gap-2 ${rightPassword ? 'text-green-600' : 'text-red-600'}`}>
                                {rightPassword ? <CheckCircleOutlineIcon/>: <ErrorOutlineIcon/>}
                                <span className="text-base">{rightPassword ? 'Password and Confirm Password matches' : 'Password and Confirm Password does not match'}</span>
                            </div>
                        }
                        
                    </div>
                }
    </div>
  )
}

export default PasswordValidation
