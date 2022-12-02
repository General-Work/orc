import { Button } from '@mui/material'
import React from 'react'

const SubmitForm = () => {
  return (
    <div>
        <p className='mt-2 mb-6 text-gray-400 text-center text-sm '>Click on the submit button to register your account.</p>
        <div className='grid'>
            <Button 
                variant='outlined' 
                className='h-12 border border-none bg-gray-700 text-white hover:bg-gray-600 shadow-sm shadow-gray-400'
            >
                submit
            </Button>
        </div>
    </div>
  )
}

export default SubmitForm