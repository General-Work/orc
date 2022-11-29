
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';


const SimpleAlert = (props) => {
    const {open, onYes, onNo, logout} = props
  return (
    <div>
      <Dialog
        open={open}
        onClose={onNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="alert-dialog-title">
            <div className='flex gap-4'>
                <div className='rounded-full bg-red-100 w-9 h-9 grid place-content-center'>
                    <div className='text-red-500 text-xs'>
                        {logout ? <LogoutIcon/> : <DeleteIcon/>}
                    </div>
                </div>
                {logout ? "Log Out" : "Delete" }
            </div>
        </DialogTitle>
        <DialogContent>
          <div className='ml-12 text-gray-500'>
              Are you sure you want to {logout ? "log out" : "delete this"}?
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onNo} variant="outlined" color="info">No</Button>
          <Button onClick={onYes}  color="error" variant="contained">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SimpleAlert
