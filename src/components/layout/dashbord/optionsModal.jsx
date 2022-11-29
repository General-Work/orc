import React from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import { MenuItem } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddTaskIcon from '@mui/icons-material/AddTask';

const OptionsModal = (props) => {
    const {open, setOpen} = props
  return (
    <Dialog open={open}  fullWidth onClose={_ => setOpen(false)}>
        <DialogTitle>
            <div className='flex gap-2'>
                <div className='rounded-full bg-green-100 p-2 text-sm font-semibold leading-5 text-green-800'>
                    <AddTaskIcon />
                </div>
                <span className='mt-2 text-lg font-semibold text-gray-800'>
                    Kindly select from the options below
                </span>
            </div>
        </DialogTitle>
        <Divider />
        <DialogContent>
            <ul className='flex flex-col gap-1'>
                {[...Array(9)].map((_,i) => {
                    return(
                        <div key={i} className={`${i % 2 === 0 && 'bg-[#f1f0f09d] rounded'}`}>
                            <MenuItem className='flex gap-2'>
                                <AppRegistrationIcon/>
                                <span>Service option {i+1}</span>
                            </MenuItem>
                        </div>
                    )
                })}
            </ul>
        </DialogContent>
    </Dialog>
  )
}

export default OptionsModal
