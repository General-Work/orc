import React from 'react'
import FormInputText from '../../../inputs/FormInputText'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
import FormInputDate from '../../../inputs/FormInputDate'
import { FormLabel } from '@mui/material'
export default function StepT() {
    return (
        <div className='flex flex-col gap-5'>
            <FormInputText className='w-full' type='text' label='Corporate Name' required size='small' />
            <nav className='flex flex-col md:flex-row items-center gap-5 mt-2'>
                <FormInputText className='w-full' label='Corporate TIN' size='small' />
                <FormInputText className='w-full' label='Digital Address' size='small' />
            </nav>
            <FormInputText className='w-full' type='text' label='Corporate Address H/No. LMB' required size='small' />
            <FormInputText className='w-full' type='text' label='P.O. Box/DTD/PMB' required size='small' />
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
            <nav className=' border-b mt-4'>
                <label className='text-gray-500'>Declaration</label>
            </nav>
            <nav>
                <p className='text-gray-600  bg-orange-50/60 p-2 rounded-md'>
                    That the company holds the Share(s) and all dividends and interests accrued
                    or to accrue on trust for the Owner and I/we undertake to transfer and deal,
                    in all respects, and to pay the Share and any dividends, interest and other
                    benefits thereon and accretions thereto in such manner as the Owner shall
                    from time to time direct.
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
