import React from 'react'
import FormInputText from '../../inputs/FormInputText'

const EmailCode = (props) => {
  const {values, handleInputChange} = props
  return (
    <>
        <p className=' my-6 text-gray-700 text-center text-sm '>A reset code has been sent tou your email, kindly check and provide it in the field below.</p>
        <div className='grid mt-10 mb-12'>
            <FormInputText label="Code" name="code" autoComplete="off" type="text" value={values} onChange={handleInputChange}/>
        </div>
    </>
  )
}

export default EmailCode
