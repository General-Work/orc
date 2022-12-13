import React,{useState} from 'react'
import useFormContext from './hooks/useFormContext'
// import FormInputComponent from './formInputComponent';
import stepsList from './stepList'
import Payment from '../../layout/paymentView/index' 
import HorizontalStepper from './HorizontalStepper'



const PageForm = () => {
    const {page, setPage, data, setData} = useFormContext()
    const [paymentOpen, setPaymentOpen] = useState(false)
        
  return (

    <div className=' h-full '>
        <div className=' max-w-5xl mx-auto'>
            <HorizontalStepper  />
            {page === stepsList.length && (
                <div className='my-4'>
                    <div className='font-semibold  text-red-600'>Make payment for application</div>
                    <button onClick={_ => setPaymentOpen(true)} className='bg-green-500 hover:bg-green-800 text-white rounded-md p-2 my-3'>
                        Payment
                    </button>
                </div>
            )}

            {paymentOpen && 
                <Payment 
                    paymentOpen={paymentOpen}
                    paymentClose={_ => setPaymentOpen(false)}
                />
            }

            
        </div>
    
    </div>

 
  )
}

export default PageForm
