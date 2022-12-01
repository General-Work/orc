import React, { useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaymentContent1 from './paymentContent1';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormLabel from '@mui/material/FormLabel'
import CardPaymentView from "./creditCard/index"


const Payment = (props) => {
    const {paymentOpen, paymentClose} = props
    const [selectedMode, setSelectedMode] = useState('')
    const [cardInfo, setCardInfo] = useState(false)

    const handleRadioChange = (event) => {
        setSelectedMode(event.target.value);
        // console.log(event.target.value)
        setCardInfo(true)
    };
  return (
    <Dialog open={paymentOpen} onClose={paymentClose} xs={{height: 300}} fullWidth>
        <DialogTitle>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <div className='rounded-full bg-blue-100 p-2 text-sm font-semibold leading-5 text-blue-800'>
                        <PaymentsIcon />
                    </div>
                    <span className='mt-2 text-lg font-semibold text-gray-800'>
                        Select mode of payment
                    </span>
                </div>
                <div onClick={paymentClose}>
                    <IconButton>
                        <CloseIcon/>
                    </IconButton>
                </div>

            </div>

            
        </DialogTitle>
        <Divider/>
        <DialogContent>
            <div className='mb-4'>
                <span className='flex flex-col gap-1'>
                    <FormLabel>Price of form:</FormLabel>
                    <span>GHC 200</span>
                </span>
            </div>
            <PaymentContent1 onChange={handleRadioChange} value={selectedMode}/>
        </DialogContent>
      
      <CardPaymentView cardInfo={cardInfo} selectedMode={selectedMode} onClose={_ => {
        setSelectedMode('')
        setCardInfo(false)
      }}/>
    </Dialog>
  )
}

export default Payment
