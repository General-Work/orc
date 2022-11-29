import React from 'react'
import FormInputPassword from '../../inputs/FormInputPassword'


const Account = (props) => {
    const {values, handleInputChange, passwordError, confirmPasswordError} = props

  return (
    <div>
        <p 
          className={`mt-2 mb-6 ${passwordError ? 'text-red-600' : 'text-gray-700'} text-center text-sm `}
        >
          Kindly provide a password. Password should include:  at least a number, lowercase, uppercase, symbol and must be at least 6 characters long
        </p>
       
        <div className='flex flex-col gap-6'>
            <FormInputPassword label="Password" name="password" value={values.password} onChange={handleInputChange} error={passwordError} autoComplete="off"/>
            <FormInputPassword label="Confirm Password" name="confirmPassword" value={values.confirmPassword} onChange={handleInputChange}
              error={confirmPasswordError} helperText={confirmPasswordError && 'Passwords do not match'} autoComplete="off"
            />
        </div>
    </div>
  )
}

export default Account
