import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'

const PaymentContent1 = (props) => {
    const {onChange, value} = props
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Modes of Payment</FormLabel>
      <RadioGroup
        value={value}
        onChange={onChange}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="credit card" control={<Radio />} label="Credit Card" />
        <FormControlLabel value="debit card" control={<Radio />} label="Debit Card" />
        <FormControlLabel value="momo pay" control={<Radio />} label="Momo Pay" />
      </RadioGroup>
    </FormControl>
  )
}

export default PaymentContent1
