import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

const CloseButton = ({onClick}) => {
  return (
    <button onClick={onClick} type="button" className="rounded-full w-9 h-9 text-gray-500 hover:bg-red-100 hover:text-red-600" >
        <CloseIcon sx={{ fontSize: 27 }}/> 
    </button>
  )
}

export default CloseButton
