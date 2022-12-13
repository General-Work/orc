import React from 'react'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
import FormInputText from '../../../inputs/FormInputText'
import { FormLabel } from '@mui/material'
function StepW() {
  return (
    <div className='flex flex-col gap-5'>
      <FormHelpInscription>
        This is to determine the size of the
        Company i.e. small scale business,
        medium scale business or large scale
        business
        </FormHelpInscription>
        <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>Revenue Envisage</FormLabel>
                        <FormInputText label='GH₵' required type='number' size='small' className='w-full' />
                    </nav>
                    <nav className="flex items-center gap-2 w-full">
                        <FormLabel required className=' basis-[70%]  '>No. of Employees Envisage</FormLabel>
                        <FormInputText type='number' size='small' className='w-full' />
                    </nav>
    </div>
  )
}

export default StepW