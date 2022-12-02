import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import CardLogo from '../../../../assets/card-logo.png'
import VerifiedIcon from '@mui/icons-material/Verified';
import DialpadIcon from '@mui/icons-material/Dialpad';
// import { ServicePickedContext } from '../../dashbord/optionsModal';
import { LoadingContext } from '../../../../App';
import { AlertContext } from '../../../../pages/clients/layout';

const CardInformation = (props) => {
    const {hideCardPay} = props
    const setLoading = useContext(LoadingContext)
    const setAlert = useContext(AlertContext)
 

    const makePayment = () => {
        setLoading(true)
        setTimeout(() => {

            setLoading(false)
            setAlert({
                open: true,
                text: 'Successfully made payment for application',
                status: 'success'
            })
            hideCardPay()
        }, 600)
    }

  return (
    <div>
        
        <div className='mx-4'>
            <div className='flex flex-col gap-1 '>
                <span className='font-semibold text-sm'>Card Number</span>
                <span className='text-gray-500 text-xs'>Enter the 16-digits card number on the card</span>
            </div>
            <div className='rounded-md boder border p-2.5 mb-10 mt-4'>
                <div className='flex justify-evenly'>
                    <img src={CardLogo} alt="card" className='w-6'/>
                    <input type="text" placeholder='2413 - 2432 - 4450 - 1129' className='text-base tracking-wider w-full mx-2 outline-none' maxLength={16}/>
                    <div className='text-blue-500 '>
                        <VerifiedIcon sx={{fontSize: 20}}/>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 mt-6'>
                <div className='col-span-2'>
                    <div className='flex flex-col gap-1'>
                        <span className='font-semibold text-sm'>CVV Number</span>
                        <span className='text-gray-500 text-xs'>Enter the 3 or 4 digit number on the card</span>
                    </div>
                </div>
                <div className='rounded-md boder border p-2.5'>
                    <div className='flex justify-between'>
                        <input type="text" placeholder='2413' className='text-base tracking-wider w-full mx-2 outline-none' maxLength={4}/>
                        <div className='text-gray-700'>
                            <DialpadIcon sx={{fontSize: 20}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 mt-10'>
                <div className='col-span-2'>
                    <div className='flex flex-col gap-1'>
                        <span className='font-semibold text-sm'>Expiry Date</span>
                        <span className='text-gray-500 text-xs'>Enter the expiration date of the card</span>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='flex gap-3'>
                        <div className='rounded-md boder border p-2.5'>
                            <div className='flex justify-between'>
                                <input type="text" placeholder='09' className='text-base tracking-wider w-full mx-2 outline-none' maxLength={2}/>
                               
                            </div>
                        </div>
                        <div className='rounded-md boder border p-2.5'>
                            <div className='flex justify-between'>
                                <input type="text" placeholder='22' className='text-base tracking-wider w-full mx-2 outline-none' maxLength={2}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-4 mt-10'>
                <div className='col-span-2'>
                    <div className='flex flex-col gap-1'>
                        <span className='font-semibold text-sm'>Password</span>
                        <span className='text-gray-500 text-xs'>Enter your dynamic password</span>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='rounded-md boder border p-2.5'>
                        <div className='flex justify-between'>
                            <input type="password" placeholder='*********' className='text-base tracking-wider w-full mx-2 outline-none'/>
                            <div className='text-gray-700'>
                                <DialpadIcon sx={{fontSize: 20}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={makePayment} className='bg-blue-600 text-white  rounded-md justify-center p-3 w-full mb-4 mt-6'>
                Pay Now
            </button>
           

        </div>
      
    </div>
  )
}

export default CardInformation
