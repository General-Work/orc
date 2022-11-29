import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert';

const ActionAlert = (props) => {
    const {autoHideDur,open, close, status, text, bounce} = props
  return (
    <Snackbar
        className={`pt-10 mr-4 ${bounce && 'animate-bounce mt-2'}`}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}} 
        open={open}
        onClose={close}
        autoHideDuration={autoHideDur?.length ? autoHideDur : 5000}
        key={{vertical: 'top'} + {horizontal: 'right'}}
    >
        <Alert  variant='filled' severity={status||'success'} sx={{ width: '100%' }}>
            {text}
        </Alert>
    </Snackbar>
  )
}

export default ActionAlert
