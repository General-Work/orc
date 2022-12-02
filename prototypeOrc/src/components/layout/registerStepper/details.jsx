import React from 'react'
import FormInputText from '../../inputs/FormInputText'

const Details = (props) => {
    const {values, handleInputChange, emailError} = props

  return (
    <div>
        <p className='mt-2 mb-4 text-gray-700 text-center text-sm '>To register, provide your name, contact, and a valid email in the fields below respectively. Then click on next.</p>
        <div className='flex flex-col gap-4'>
        <FormInputText label="Name" name="name" autoComplete="off" value={values.name} onChange={handleInputChange} required type="text"/>
        <FormInputText label="Contact" name="contact" type="text" autoComplete="off" value={values.contact} onChange={handleInputChange} required />
        <FormInputText label="Email" name="email" type="email" autoComplete="off" value={values.email} onChange={handleInputChange} required 
          error={emailError} helperText={emailError && "Invalid email"}
        />
        </div>
    </div>
  )
}

export default Details
