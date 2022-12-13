import React from 'react'
import FormInputText from '../../../inputs/FormInputText'
import { FormLabel } from '@mui/material'
import FormHelpInscription from '../../../alerts/FormHelpInscription'

export default function StepX() {
  return (
    <div className='flex flex-col gap-5 pt-5'>
      <nav className='flex flex-col gap-5 my-2 bg-blue-50/50 p-2'>
        <nav className='flex flex-col gap-5  md:flex-row md:gap-10 text-sm'>
          <nav className='flex item-center gap-2'>
            <FormLabel htmlFor="">Apply for BOP Now</FormLabel>
            <input type="radio" name="ApplyforBOP" id="" />
          </nav>
          <nav className='flex item-center gap-2'>
            <FormLabel htmlFor="">Apply for BOP Now</FormLabel>
            <input type="radio" name="ApplyforBOP" id="" />
          </nav>
          <nav className='flex item-center gap-2'>
            <FormLabel htmlFor="">Apply for BOP Now</FormLabel>
            <input type="radio" name="ApplyforBOP" id="" />
          </nav>
        </nav>
        <nav className="flex items-center gap-2 w-full">
          <FormLabel required className=' basis-[70%]  '>Provide BOP Reference No.</FormLabel>
          <FormInputText type='number' size='small' className='w-full' />
        </nav>
      </nav>
      <nav className=' border-b'>
        <label className='text-gray-500'>Please fill where applicant (Director/Secretary/Subscriber/Trustee) cannot read or write</label>
      </nav>
      <FormHelpInscription>
        For this section print a copy for
        each person who cannot sign to
        thumb print
      </FormHelpInscription>

        <div className='flex justify-center'><button className='text-white bg-sky-500 py-2 px-3 rounded-md '>printable form</button></div>
    </div>
  )
}
