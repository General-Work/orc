import React from 'react'
import FormInputDate from '../../../inputs/FormInputDate'
import FormInputText from '../../../inputs/FormInputText'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
export default function StepU() {
    return (
        <div className='flex flex-col gap-5 pt-3'>
            <FormHelpInscription>
                The form must be signed by all
                subscribers in the presence of a
                witness, who shall attest to the signing
            </FormHelpInscription>
            <FormInputDate size='small' className='w-full' label='Date' onChange={() => null} />
                <FormInputText label='Full Name' required size='small' className='w-full' />
            <nav className='flex items-center flex-col gap-5 md:flex-row  md:gap-10'>
                <FormInputText label='Address' required size='small' className='w-full' />
                <FormInputText label='Occupation' required size='small' className='w-full' />
            </nav>
        </div>
    )
}
