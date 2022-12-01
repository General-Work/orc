import React, { useContext } from 'react'
import FormInputText from '../../../inputs/FormInputText'
import FormInputSelect from '../../../inputs/FormInputSelect'
import { ServicePickedContext } from '../optionsModal';
import { LoadingContext } from '../../../../App';
import FormLabel from '@mui/material/FormLabel'
import { useNavigate } from 'react-router-dom';

const networkServices = [{value: 'MTN', name: "MTN"}, {value: "vodafone", name: 'Vodafone'}, {value: "Airtel/Tigo", name: 'Airtel / Tigo'}]

const Index = () => {
    const setLoading = useContext(LoadingContext)
    const servicePicked = useContext(ServicePickedContext)
    const navigate = useNavigate()

    const goToFormPage = () => {
        setLoading(true)
        setTimeout(() => {

            setLoading(false)
            navigate(`/businessregistration/${servicePicked?.trim().toLowerCase().replaceAll(' ','')}`)
        }, 600)
    }
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-3'>
            <FormLabel>Price of form</FormLabel>
            <FormInputText label="Price" readOnly value='GHC 200'/>
        
        </div>
        <div className='flex flex-col gap-3'>
            <FormLabel>Select your network provider</FormLabel>
            <FormInputSelect options={networkServices} label="Network"/>
        </div>
        <div className='flex flex-col gap-3'>
            <FormLabel>Enter your phone number</FormLabel>
            <FormInputText label="Phone Number"/>
        
        </div>
        <div className='flex flex-col gap-3'>
            <FormLabel>Enter amount to be paid</FormLabel>
            <FormInputText label="Amount"/>
        </div>
        <button onClick={goToFormPage} className='bg-blue-600 text-white  rounded-md justify-center p-3 w-full mb-4 mt-6 hover:bg-blue-800'>
                Pay Now
            </button>

    </div>
  )
}

export default Index
