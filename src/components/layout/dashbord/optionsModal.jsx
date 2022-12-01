import React, { createContext, useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import { MenuItem } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useNavigate } from 'react-router-dom';
import Payment from './payment'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const ServicePickedContext = createContext()

const OptionsModal = (props) => {
    const {open, selectedService, onClose} = props
    const [paymentOpen, setPaymentOpen] = useState(false)
    const [servicePicked, setSerivePicked] = useState(null)

    

    const getPayemt = (val) => {
        setPaymentOpen(true)
        setSerivePicked(val)
    }
  return (
    <Dialog open={open}  fullWidth onClose={onClose} maxWidth={selectedService?.length === 16 ? 'md' : 'sm'}>
        <DialogTitle>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <div className='rounded-full bg-green-100 p-2 text-sm font-semibold leading-5 text-green-800'>
                        <AddTaskIcon />
                    </div>
                    <span className='mt-2 text-lg font-semibold text-gray-800'>
                        Select from the services below
                    </span>
                </div>
                <div onClick={onClose}>
                    <IconButton>
                        <CloseIcon/>
                    </IconButton>
                </div>
            </div>
        </DialogTitle> 
        <Divider />
        <DialogContent className='mb-10'>
            <ul className='flex flex-col gap-1 max-h-96 '>
                {selectedService?.length > 0 ? selectedService.map((x,i) =>{
                    return(
                        <div key={i} className={`${i % 2 === 0 && 'bg-[#f1f0f09d] rounded'} h-`}>
                            <MenuItem 
                                // onClick={_ => goToFormPage(x.id)}
                                onClick={_ => getPayemt(x.id)}
                                className='flex gap-2'
                            >
                                <AppRegistrationIcon/>
                                <span className='normal-case'>{x?.name}</span>
                            </MenuItem>
                        </div>
                    )
                })

                :
                    [...Array(9)].map((_,i) => {
                        return(
                            <div key={i} className={`${i % 2 === 0 && 'bg-[#f1f0f09d] rounded'}`}>
                                <MenuItem className='flex gap-2'>
                                    <AppRegistrationIcon/>
                                    <span>Service option {i+1}</span>
                                </MenuItem>
                            </div>
                        )
                    })
                }
               
            </ul>
        </DialogContent>
        <ServicePickedContext.Provider value={servicePicked}>
            <Payment
                paymentOpen={paymentOpen} 
                paymentClose={_ => {
                    setPaymentOpen(false)
                    servicePicked(null)
                }}    
            />

        </ServicePickedContext.Provider>
    </Dialog>
  )
}

export default OptionsModal
