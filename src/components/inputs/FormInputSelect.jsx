import {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // width: 250,
    },
  },
};

const FormInputSelect = ({label, value, options, onChange, name, onClick, size, ...props }) => {

  return (
    <FormControl fullWidth size={size} {...props}>
      <InputLabel id={name}>{label}</InputLabel>
        <Select
          labelId={name}
          id={value}
          value={value}
          label={label}
          onChange={onChange}
          onClick={onClick}
          name={name}
          MenuProps={MenuProps}
        >
            {options.map((option, i) => {
                return(
                    <MenuItem key={i} value={option.value}>{option.name}</MenuItem>
                )}
            )}
        </Select>
    </FormControl>
  )
}

export default FormInputSelect
