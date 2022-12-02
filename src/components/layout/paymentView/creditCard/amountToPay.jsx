import React from 'react'
import PaymentsIcon from '@mui/icons-material/Payments';



const AmountToPay = () => {
  return (
    <div className='grid justify-center items-center h-full'>
        <div className='flex flex-col gap-4'>
            <div className='grid justify-center'>
                <div className='rounded-full bg-blue-100  text-sm font-semibold leading-5 text-blue-800 h-28 w-28'>
                    <div  className="grid place-content-center mt-8">
                        <PaymentsIcon sx={{fontSize: 50}}/>
                    </div>
                </div>
            </div>
            <div className='grid justify-center text-gray-700'>
                <div className='flex flex-col'>
                    <span className='font-semibold text-xl'>
                        Amount to pay
                    </span>
                    <span className='text-lg grid justify-center font-medium'>
                        GHC 200
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AmountToPay
