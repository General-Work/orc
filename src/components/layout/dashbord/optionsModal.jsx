import React, { createContext, useContext, useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import { MenuItem } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingContext } from '../../../App';

export const ServicePickedContext = createContext()

const OptionsModal = (props) => {
    const {open, selectedService, onClose} = props
    const setLoading = useContext(LoadingContext)
    const navigate = useNavigate()

    

    const getPayemt = (val) => {
        setLoading(true)
        setTimeout(() => {

            navigate(`/entitycreation/${val?.trim().toLowerCase().replaceAll(' ','','(',')', '( )')}`)
            setLoading(false)
        }, 600)
    }
  return (
    <Dialog open={open}  fullWidth onClose={onClose} maxWidth={selectedService?.length === 16 || selectedService?.length === 13 ? 'md' : 'sm'}>
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
                {selectedService?.length > 0 && selectedService.map((x,i) =>{
                    return(
                        <div key={i} className={`${i % 2 === 0 && 'bg-[#f1f0f09d] rounded'} h-`}>
                            <MenuItem 
                               
                                onClick={_ => getPayemt(x.name)}
                                className='flex gap-2'
                            >
                                <AppRegistrationIcon/>
                                <span className='normal-case'>{x?.name}</span>
                            </MenuItem>
                        </div>
                    )
                })
                }

            </ul>
        </DialogContent>
      
    </Dialog>
  )
}

export default OptionsModal
