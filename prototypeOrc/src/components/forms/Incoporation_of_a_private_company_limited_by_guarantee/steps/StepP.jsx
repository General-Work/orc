import React from 'react'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
import FormInformativeInscriptions from '../../../alerts/FormInformativeInscriptions'
import FormInputDate from '../../../inputs/FormInputDate'
import FormInputText from '../../../inputs/FormInputText'
import FormInputSelect from '../../../inputs/FormInputSelect'
import { FormLabel } from '@mui/material'
import { useState } from 'react'
import { Add } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete';
export default function StepP() {
    const [subcribers,setSubscribers] = useState([{}])
      
    let addNewSubcriber = () => {
        setSubscribers((data)=>[...data,{}]) 
    }
    let removeSubscriber = (i) =>{  
        setSubscribers((data)=>data = data.filter((item,index)=>index != i) )
    }

    function SubscriberForm(){
        return <div className='flex flex-col gap-5'>
        <FormInformativeInscriptions>
            This Section Must Be Filled With or Without A Registered Constitution
        </FormInformativeInscriptions>
        <p className='text-gray-600 text-sm bg-orange-50/60 p-2 rounded-md'>
            I/We the undersigned are desirous of forming an incorporated Company in pursuance of this
            Constitution and we respectively agree to take the number of shares in the Company set opposite our
            respective names and to pay therefor in cash the consideration respectively stated
        </p>
        <FormHelpInscription>
            <ul>
                <li className='ml-5 list-disc'>
                    A subscriber is somebody who agrees
                    to become a member of the company
                    by the taking up shares at the
                    inception of the company
                </li>
                <li className='ml-5 list-disc'>
                    The application for incorporation shall
                    be made by a person:
                </li>
                <ul>
                    <li className='ml-5 list-inside list-disc'>
                        Signing a duly completed application
                        for incorporation form or
                    </li>
                    <li className='ml-5 list-inside list-disc'>
                        signing a duly completed application
                        for incorporation to this form and the
                        constitution of the proposed company
                        ( where a registered constitution is
                        preferred)

                    </li>
                </ul>
                <li className='ml-5 list-disc'>
                    If there are more than two subscribers. Click new subscriber
                </li>
            </ul>
        </FormHelpInscription>
        <nav className='flex flex-col md:flex-row items-center gap-5 mt-2'>
            <FormInputSelect size='small' label='Title' name='title' value='Mr' options={[{ name: 'Mr', value: 'Mr' }, { name: 'Mrs', value: 'Mrs' }, { name: 'Miss', value: 'Miss' }, { name: 'Ms', value: 'Ms' }, { name: 'Dr', value: 'Dr' }]} />
            <FormInputText className='w-full' label='First Name' size='small' />
            <FormInputText className='w-full' label='Middle Name' size='small' />
            <FormInputText className='w-full' label='Last Name' size='small' />
        </nav>
        <FormInputText className='w-full' label='Any Former Name' size='small' />
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputText className='w-full' type='text' label='Tin' size='small' />
            <FormInputText className='w-full' type='text' label='Ghana Card' size='small' />
        </nav>
        <FormInformativeInscriptions>
            Without Tin fill GRA attached forms
        </FormInformativeInscriptions>
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputSelect size='small' label='Gender' name='Gender' value='Male' options={[{ name: 'Male', value: 'Male' }, { name: 'Female', value: 'Female' }]} />
            <FormInputText className='w-full' label='Nationality' size='small' />
        </nav>
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputDate size='small' className='w-full' label='Date of Birth' onChange={() => null} />
            <FormInputText className='w-full' label='Place of Birth' size='small' />
        </nav>

        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputText className='w-full' type='text' required label='Occupation' size='small' />
            <FormInputText className='w-full' label='Digital Address' size='small' />
        </nav>
        <FormInputText className='w-full' type='text' required label='Address' size='small' />
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
    </div>

    }
    return <div>
        {subcribers.map((subcriber,i)=><section key={i} className='bg-blue-50/30 p-5 shadow-md mb-5'>
                    <nav className='flex items-center justify-between mb-5'>
                        <span className='bg-blue-50 p-2 text-sm flex items-center gap-1 shadow-sm px-3'><span className='text-sky-600'>Subscriber</span> <span className='h-5 w-5 rounded-full grid place-items-center bg-blue-500 text-white'>{i+1}</span> </span> 
                        {subcribers.length !== 1 && <button onClick={()=>removeSubscriber(i)} className='text-sm flex items-center gap-2 p-2 bg-red-50 text-red-300 rounded-md'>Delete this data <DeleteIcon size='smal' /></button>}
                     </nav>
                        <SubscriberForm />
                    <nav className='flex items-center justify-end'>
                        <button onClick={()=>addNewSubcriber()} className='bg-sky-600 text-white rounded-md py-1 px-3 shadow-sm flex items-center gap-1 '><Add size='small'/> <span>new subscriber</span></button>
                    </nav>
        </section>)}

    </div>
}
