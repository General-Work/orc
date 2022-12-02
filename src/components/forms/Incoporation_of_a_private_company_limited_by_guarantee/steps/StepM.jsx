import React from 'react'
import FormInputText from '../../../inputs/FormInputText'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
export default function () {
    return <div className='flex flex-col gap-5'>
        <FormHelpInscription>
            <ul>
                <li className='list-disc ml-5 '>
                    The Corporate Body must have as one
                    of its subscribers or operating officers
                    a person who qualifies to be a
                    Company Secretary.

                </li>
                <li className='list-disc ml-5 '>
                    The Corporate Representative must
                    hold at least one of the qualification(s)
                    of secretary stated above
                    Reference to section 211 (2) Act 992
                </li>
            </ul>
        </FormHelpInscription>
        <FormInputText label='Coporate Name' required size='small' className='w-full' />
        <nav className='flex items-center flex-col gap-5 md:flex-row  md:gap-10'>
            <FormInputText label='Corporate TIN' required size='small' className='w-full' />
            <FormInputText label='Digital Address' required size='small' className='w-full' />
        </nav>

        <FormInputText label='Corporate Address H/No. LMB' required size='small' className='w-full' />
        <FormInputText label='Name of Person Repersenting the Corporate Secretary' required size='small' className='w-full' />

        <nav className='flex items-center flex-col gap-5 md:flex-row  md:gap-10'>
            <FormInputText label='TIN of Representative' required size='small' className='w-full' />
            <FormInputText label='Ghana Card' required size='small' className='w-full' />

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
                <li className='list-disc ml-5 '>
                    Reference to section 150 (1) (D) (i) Act
                    992

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
