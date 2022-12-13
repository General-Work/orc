import React from 'react'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
import FormInputSelect from '../../../inputs/FormInputSelect'
import FormInputText from '../../../inputs/FormInputText'
import { FormLabel } from '@mui/material'
import { useState } from 'react'
import { Add } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete';
export default function StepR() {
    const [subcribers,setSubscribers] = useState([{}])
      
    let addNewSubcriber = () => {
        setSubscribers((data)=>[...data,{}]) 
    }
    let removeSubscriber = (i) =>{  
        setSubscribers((data)=>data = data.filter((item,index)=>index != i) )
    }

    function SubscriberForm(){
        return  <div className='flex flex-col gap-5'>
        <FormHelpInscription>
            If there are more than one Corporate
            Subscribers, click on new subscriber to add new
        </FormHelpInscription>
        <FormInputText className='w-full' type='text' label='Corporate Name' required size='small' />
        <nav className='flex flex-col md:flex-row items-center gap-5 mt-2'>
            <FormInputText className='w-full' label='Corporate TIN' size='small' />
            <FormInputText className='w-full' label='Digital Address' size='small' />
        </nav>
        <FormInputText className='w-full' type='text' label='Corporate Address H/No. LMB' required size='small' />
        <FormInputText className='w-full' type='text' label='P.O. Box/DTD/PMB' required size='small' />
        <nav className='flex flex-col gap-2 bg-gray-100/60 p-2 rounded-md shadow-sm '>
        <nav className="flex items-center gap-2 w-full">
            <FormLabel required className=' basis-[70%]  '>No. of Shares to be Taken</FormLabel>
            <FormInputText label='' required type='number' size='small' className='w-full' />
        </nav>
        <nav className="flex items-center gap-2 w-full">
            <FormLabel required className=' basis-[70%]  '>Consideration Payable in Cash</FormLabel>
            <FormInputText label='GH₵' required type='number' size='small' className='w-full' />
        </nav>
        </nav>
        <FormInputText className='w-full' type='text' label='Name of Person Representing the Corporate Subscriber' required size='small' />
        <nav className='flex flex-col md:flex-row items-center gap-5 mt-2'>
            <FormInputText required className='w-full' label='TIN of Representative' size='small' />
            <FormInputText required className='w-full' label='Ghana Card' size='small' />
        </nav>
        <nav className=' border-b mt-4'>
        <label className='text-gray-500'>Attested by</label>
    </nav>
        <FormHelpInscription>
        <ul>
            <li className='list-disc ml-5 '>
                For authentication purposes, two
                officers of the company are to sign
                their signatures together with a seal or
                stamp of the company

            </li>
        </ul>
    </FormHelpInscription>
    <fieldset className='border border-gray-300 p-3 flex flex-col gap-5 rounded-md' >
        <legend className='ml-5 py-1 px-2 bg-blue-50 rounded-md shadow-sm' >Director</legend>
        <nav className='flex items-center flex-col gap-5 md:flex-row  md:gap-10'>
        <FormInputText label='TIN' required size='small' className='w-full' />
        <FormInputText label='Ghana Card' required size='small' className='w-full' />
        
    </nav>
    <FormInputText label='Name ' required size='small' className='w-full' />

    </fieldset>
    <fieldset className='border border-gray-300 p-3 flex flex-col gap-5 rounded-md' >
        <legend className='ml-5 py-1 px-2 bg-blue-50 rounded-md shadow-sm' >Secretary</legend>
        <nav className='flex items-center flex-col gap-5 md:flex-row  md:gap-10'>
        <FormInputText label='TIN' required size='small' className='w-full' />
        <FormInputText label='Ghana Card' required size='small' className='w-full' />
        
    </nav>
    <FormInputText label='Name ' required size='small' className='w-full' />

    </fieldset>

        
    </div>


    }
    return <div>
             {subcribers.map((subcriber,i)=><section key={i} className='bg-blue-50/30 p-5 shadow-md mb-5'>
                    <nav className='flex items-center justify-between mb-5'>
                        <span className='bg-blue-50 p-2 text-sm flex items-center gap-1 shadow-sm px-3'><span className='text-sky-600'>Subscriber</span> <span className='h-5 w-5 rounded-full grid place-items-center bg-blue-500 text-white'>{i+1}</span> </span> 
                        {subcribers.length !== 1 && <button onClick={()=>removeSubscriber(i)} className='text-sm flex items-center gap-2 p-2 bg-red-50 text-red-300 rounded-md'>Delete this data <DeleteIcon size='smal' /></button>}
                     </nav>
                        <SubscriberForm />
                    <nav className='flex items-center justify-end mt-5'>
                        <button onClick={()=>addNewSubcriber()} className='bg-sky-600 text-white rounded-md py-1 px-3 shadow-sm flex items-center gap-1 '><Add size='small'/> <span>new subscriber</span></button>
                    </nav>
        </section>)}
    </div>
}
