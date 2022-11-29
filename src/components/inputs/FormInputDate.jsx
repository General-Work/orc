
// import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function FormInputDate({label, value, onChange, name, ...props}) {
    const convertToDefEventPara = (name, value) => ({
      target: {name, value}
    })
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker 
            name={name}
            label={label}
            value={value}
            {...props}
            onChange={ date => onChange(convertToDefEventPara(name,date))}
            renderInput={(params) => <TextField {...props} {...params}/>}
        />

  </LocalizationProvider>
  )
}

export default FormInputDate
