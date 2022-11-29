import React from 'react'
import FormInputPassword from '../../inputs/FormInputPassword'


const NewPassword = (props) => {
  const {values, handleInputChange, passwordError, confirmPasswordError} = props

  return (
    <div>
        <p className={`mt-2 mb-4 ${passwordError ? 'text-red-600' : 'text-gray-700'} text-center text-sm `}
          >
            Set a new password. Password should include:  at least a number, lowercase, uppercase, symbol and must be at least 6 characters long
        </p>
        
        <div className='flex flex-col gap-5'>
            <FormInputPassword label="Password" name="password" value={values.password} onChange={handleInputChange} error={passwordError} autoComplete="off"/>
            <FormInputPassword label="Confirm Password" name="confirmPassword" value={values.confirmPassword} onChange={handleInputChange}
              error={confirmPasswordError} helperText={confirmPasswordError && 'Passwords do not match'} autoComplete="off"
            />
        </div>
      
    </div>
  )
}

export default NewPassword
