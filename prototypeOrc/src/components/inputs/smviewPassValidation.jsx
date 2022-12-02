import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


const SmviewPassValidation = (props) => {
    const {open,setOpen} = props
  return (
    <Dialog
        className='blcok lg:hidden'
        open={open}
        // onClose={_ => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="alert-dialog-title">
            <div className='flex gap-4 text-red-500'>
                <div className='rounded-full bg-red-100 w-10 h-10 grid place-content-center '>
                    <div className=' text-sm'>
                        <ReportProblemIcon/>
                    </div>
                </div>
                <span className='text-2xl mt-1.5'>Caution!!!</span>
            </div>
        </DialogTitle>
        <DialogContent>
          <div className='flex justify-center font-semibold text-xl'>Password must include the following:</div>
          
          <div className='flex justify-center mt-4'>
            <ol className=' text-lg'>
              <li>1.  At least one capital letter (A-Z)</li>
              <li>2.  At least one small letter (a-z)</li>
              <li>3.  At least one special character (Eg. +_-.$#)</li>
              <li>4.  At least six characters long</li>

            </ol>
          </div>
        </DialogContent>
        <DialogActions>
    
          <Button onClick={_ => setOpen(false)}  color="error" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default SmviewPassValidation
