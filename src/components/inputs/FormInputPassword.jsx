import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const FormInputPassword = ({label, name, onChange, variant, value, helperText, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  return (
    <FormControl  variant={variant || 'outlined'} {...props}>
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
            // id="outlined-adornment-password"
            name={name}
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={_ => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>
            }
            label={label}
        />
        {helperText?.length > 0 && 
            <span className='text-red-600'>{helperText}</span>
        }
    </FormControl>
  )
}

export default FormInputPassword
