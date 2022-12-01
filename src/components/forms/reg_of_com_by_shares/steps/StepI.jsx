import React from 'react'
// import FormInputComponent from '../../../../components/forms/reg_of_com_by_shares/formInputComponent'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
import FormInputText from '../../../inputs/FormInputText'
export default function StepI() {
    return (
        <div className='flex flex-col gap-5'>
            <FormHelpInscription>
                Applicants are to provide at least, one
                mobile phone number and an email
                address. This is to assist the Registrar
                of Companies to communicate to the
                company
            </FormHelpInscription>
            <div className='flex flex-col md:flex-row gap-5'>
                <FormInputText size='small' type='number' required className='w-full' label='phone No 1' />
                <FormInputText size='small' type='number' className='w-full' label='phone No 2' />
            </div>
            <div className='flex flex-col md:flex-row gap-5'>
                <FormInputText size='small' type='number' required className='w-full' label='Mobile No 1' />
                <FormInputText size='small' type='number' className='w-full' label='Mobile No 2' />
            </div>
            <div className='flex flex-col md:flex-row gap-5'>
                <FormInputText size='small' type='text' className='w-full' label='Fax' />
                <FormInputText size='small' type='text' required className='w-full' label='Email Address' />
                <FormInputText size='small' type='text' className='w-full' label='Website' />
            </div>

        </div>
    )
}
