import React from 'react'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
import FormInputText from '../../../inputs/FormInputText'
import FormInputSelect from '../../../inputs/FormInputSelect'
import { FormLabel } from '@mui/material'
import FormInputDate from '../../../inputs/FormInputDate'
export default function StepS() {
    return (
        <div className='flex flex-col gap-5'>
            <FormHelpInscription>
                Individual or Corporate Bodies that
                may be holding shares for minors
            </FormHelpInscription>
            <nav className='text-left my-2 font-semibold text-gray-500'>Address and Description of Trustee - Individual</nav>
            <nav className='flex items-center flex-col gap-5 md:flex-row  md:gap-10'>
                <FormInputText label='TIN' required size='small' className='w-full' />
                <FormInputText label='Ghana Card' required size='small' className='w-full' />
            </nav>
            <nav className='flex flex-col md:flex-row items-center gap-5 mt-2'>
                <FormInputSelect size='small' required label='Trustee' name='Trustee' value='Mr' options={[{ name: 'Mr', value: 'Mr' }, { name: 'Mrs', value: 'Mrs' }, { name: 'Miss', value: 'Miss' }, { name: 'Ms', value: 'Ms' }, { name: 'Dr', value: 'Dr' }]} />
                <FormInputText className='w-full' label='First Name' size='small' />
                <FormInputText className='w-full' label='Middle Name' size='small' />
                <FormInputText className='w-full' label='Last Name' size='small' />
            </nav>
            <FormInputText className='w-full' label='Any Former Name' size='small' />
            <nav className='flex flex-col md:flex-row items-center gap-5'>
                <FormInputText required className='w-full' label='Nationality' size='small' />
                <FormInputText required className='w-full' label='Occupation' size='small' />
            </nav>
            <nav className='flex flex-col md:flex-row items-center gap-5'>
                <FormInputText required className='w-full' label='Digital Address' size='small' />
                <FormInputText required className='w-full' label='Address' size='small' />
            </nav>
            <nav className=' border-b mt-4'>
                <label className='text-gray-500'>Declaration</label>
            </nav>
            <nav>
            <p className='text-gray-600  bg-orange-50/60 p-2 rounded-md'>
                That I/we hold the Share(s) and all dividends and interests accrued or to
                accrue on trust for the Owner and I/we undertake to transfer and deal, in all
                respects, and to pay the Share and any dividends, interest and other
                benefits thereon and accretions thereto in such manner as the Owner shall
                from time to time direct
            </p>
            <nav className='flex items-center gap-2 mt-2 ml-3 '>
                <input type="checkbox" name="" id="" />
                <span>I accept the declaration above</span>
            </nav>
            </nav>
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
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputText className='w-full' label='Name(Minor)' size='small' />
            <FormInputDate size='small' className='w-full' label='Date of Birth' onChange={() => null} />
        </nav>
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputText className='w-full' label='Identification Type(ID)' size='small' />
            <FormInputText className='w-full' label='ID Reference Number' size='small' />
        </nav>
        
        </div>
    )
}
