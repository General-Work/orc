import React from 'react'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
import FormInputText from '../../../inputs/FormInputText'
import { FormLabel } from '@mui/material'

export default function StepO() {
    return (
        <div className='flex flex-col gap-5'>
            <FormHelpInscription>
                <ul className=' leading-5 '>
                    <li className='list-disc ml-5 '>
                        State clearly the total amount of the
                        proposed Authorized Shares
                        and the Stated Capital
                        All shares are of no par value

                    </li>
                    <li className='list-disc ml-5 '>
                        Also state all the relevant details
                        about the company shares

                    </li>
                    <li className='list-disc ml-5 '>
                        The amount Paid in Cash of Each Class
                        and Amount Remaining to be Paid on Each
                        Class must not exceed stated capital
                    </li>
                    <li className='list-disc ml-5 '>
                        Equity Shares, previously known as
                        Ordinary shares

                    </li>
                </ul>
            </FormHelpInscription>
            <nav className='flex flex-col gap-4'>
                <nav className='flex flex-col gap-2 bg-gray-100/60 p-2 rounded-md shadow-sm '>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Authorised Shares</FormLabel>
                        <FormInputText label='' required type='number' size='small' className='w-full' />
                    </nav>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Stated Capital</FormLabel>
                        <FormInputText label='GH₵' required type='number' size='small' className='w-full' />
                    </nav>

                </nav>
                <nav className='flex flex-col gap-2 bg-gray-50/30 p-2 rounded-md shadow-sm'>
                    <nav className=' border-b'>
                        <label className='text-gray-500 font-semibold'>Number of Authorized Shares of Each Class</label>
                    </nav>

                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Equity Shares</FormLabel>
                        <FormInputText label='' required type='number' size='small' className='w-full' />
                    </nav>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Preference Shares</FormLabel>
                        <FormInputText required type='number' size='small' className='w-full' />
                    </nav>
                </nav>

                <nav className='flex flex-col gap-2 bg-gray-100/60 p-2 rounded-md shadow-sm'>
                    <nav className=' border-b'>
                        <label className='text-gray-500 font-semibold'>Number of Issued Shares of Each Class</label>
                    </nav>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Equity Shares</FormLabel>
                        <FormInputText required type='number' size='small' className='w-full' />
                    </nav>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Preference Shares</FormLabel>
                        <FormInputText required type='number' size='small' className='w-full' />
                    </nav>
                </nav>
                <nav className='flex flex-col gap-2 bg-gray-50/30 p-2 rounded-md shadow-sm'>
                    <nav className=' border-b'>
                        <label className='text-gray-500 font-semibold'>Amount Paid In Cash of Each Class</label>
                    </nav>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Equity Shares</FormLabel>
                        <FormInputText label='GH₵' required type='number' size='small' className='w-full' />
                    </nav>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Preference Shares</FormLabel>
                        <FormInputText label='GH₵' type='number' size='small' className='w-full' />
                    </nav>

                </nav>
                <nav className='flex flex-col gap-2 bg-gray-100/60 p-2 rounded-md shadow-sm'>
                    <nav className=' border-b'>
                        <label className='text-gray-500 font-semibold'>Amount Paid Otherwise than in Cash of Each Class</label>
                    </nav>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Equity Shares</FormLabel>
                        <FormInputText label='GH₵' required type='number' size='small' className='w-full' />
                    </nav>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Preference Shares</FormLabel>
                        <FormInputText label='GH₵' type='number' size='small' className='w-full' />
                    </nav>

                </nav>
                <nav className='flex flex-col gap-2 bg-gray-50/30 p-2 rounded-md shadow-sm'>
                    <nav className=' border-b'>
                        <label className='text-gray-500 font-semibold'>Amount Remaining to be Paid on Each Class</label>
                    </nav>
                    <FormHelpInscription>
                        Amount Remaining to be Paid on Each
                        Class must be stated, if it is applicable
                        to the company
                    </FormHelpInscription>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Equity Shares(Unpaid)</FormLabel>
                        <FormInputText label='GH₵' required type='number' size='small' className='w-full' />
                    </nav>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Equity Shares(Due)</FormLabel>
                        <FormInputText label='GH₵' type='number' size='small' className='w-full' />
                    </nav>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Preference Shares(Unpaid)</FormLabel>
                        <FormInputText label='GH₵' type='number' size='small' className='w-full' />
                    </nav>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Preference Shares(Due)</FormLabel>
                        <FormInputText label='GH₵' type='number' size='small' className='w-full' />
                    </nav>
                </nav>
            </nav>


        </div>
    )
}
