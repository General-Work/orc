import FormInputText from "./FormInputText";
import FormInputPassword from "./FormInputPassword";
import { styled } from '@mui/material/styles';

export const CssTextField = styled(FormInputText)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& label': {
        color: 'gray'
    },
    '&:hover label': {
        color: 'white'
    },
    'input':{
        color: 'gray'
    },
    'input:focus': {
        color:'white'
    }
  });

  
  export const CssPasswordField = styled(FormInputPassword)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& label': {
        color: 'gray'
    },
    '&:hover label': {
        color: 'white'
    },
    'input':{
        color: 'gray'
    },
    'input:focus': {
        color:'white'
    },
    'button': {
        color: 'gray'
    },
    '&:hover button': {
        color: 'white'
    },
  });