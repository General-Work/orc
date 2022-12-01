import React from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import PaymentsIcon from '@mui/icons-material/Payments';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormLabel from '@mui/material/FormLabel'
import CardInformation from './cardInformation';
import AmountToPay from './amountToPay';
import MomoPayView from '../momoPay/index'

const Index = (props) => {
  const {onClose, cardInfo, selectedMode} = props
  return (
    <Dialog fullWidth open={cardInfo} maxWidth={selectedMode !== 'momo pay' ? 'md' : 'sm'} onClose={onClose}>
      <DialogTitle>
        <div className='flex justify-between'>
          <div className='flex gap-3'>
            <div className='rounded-full bg-blue-800 p-2 text-sm font-semibold leading-5 text-white'>
                <PaymentsIcon/>
            </div>
            <FormLabel className='mt-2.5 capitalize'>{selectedMode}</FormLabel>

          </div>
          <IconButton onClick={onClose}>
              <CloseIcon/>
            </IconButton>
        </div>
      </DialogTitle>
      <Divider/>
      <DialogContent>
        {selectedMode !== 'momo pay' ? 
          <div className='grid grid-cols-7 gap-3'>
            <div className='col-span-4'>
              <CardInformation />
            </div>
            <div className="col-span-3 bg-blue-50">
              <AmountToPay/>
            </div>
          </div>
        :
          <MomoPayView />
        }
      </DialogContent>
      
    </Dialog>
  )
}

export default Index
