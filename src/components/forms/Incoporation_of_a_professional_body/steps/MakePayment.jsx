
import Payment from '../../../layout/paymentView/index' 
import { useState } from 'react'

export default function MakePayment() {
    // const {page, setPage, data, setData} = useFormContext()
    const [paymentOpen, setPaymentOpen] = useState(false)
  return (
        <div>

         <div className='my-4'>
                    <div className='font-semibold  text-red-600'>Make payment for application</div>
                    <button onClick={_ => setPaymentOpen(true)} className='bg-green-500 hover:bg-green-800 text-white rounded-md p-2 my-3'>
                        Payment
                    </button>

        </div>
        {paymentOpen && 
                <Payment 
                    paymentOpen={paymentOpen}
                    paymentClose={_ => setPaymentOpen(false)}
                />
            }
        </div>
        
   
  )
}
