import React from 'react'
import FormInputText from '../../inputs/FormInputText'

const ProvideEmail = (props) => {
  const {values, handleInputChange, emailError} = props
  return (
    <>
        <p className=' my-6 text-gray-700 text-center text-sm '>To reset password, provide your email, and click on next.</p>
        <div className='grid mt-10 mb-12'>
            <FormInputText label="Email" name="email"  autoComplete="off" value={values} onChange={handleInputChange}
              error={emailError} helperText={emailError && 'Invalid Email'} required  type="email"/>
        </div>
    </>
       
        
  )
}

export default ProvideEmail
