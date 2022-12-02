import React from 'react'
import TextField from '@mui/material/TextField'

const FormInputText = ({label, name, type, onChange, variant, value, onClick, ...props }) => {
  return (
    <TextField
          // id="outlined-basic"
          label={label}
          type={type}
          name={name}
          onChange = {onChange}
          variant={variant || 'outlined'}
          value={value}
          onClick={onClick}
          {...props}
          // className="border-white"
        />
        
  )
}

export default FormInputText
