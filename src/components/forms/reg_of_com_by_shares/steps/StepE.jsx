import React from 'react'
import FormInputText from '../../../inputs/FormInputText'
import FormInformativeInscriptions from '../../../alerts/FormInformativeInscriptions'
import FormHelpInscription from '../../../alerts/FormHelpInscription'

export function useLocationForm(){
    return <div className='flex flex-col gap-5'>
              <nav className='flex items-center flex-col gap-5 md:flex-row  md:gap-10'>
                <FormInputText label='Digital Address' required size='small' className='w-full' />
                <FormInputText label='House/Building/Flat(Name or House No.)/LMB' required size='small' className='w-full' />
            </nav>

            <nav>
                <FormInputText label='Street Name' required size='small' className='w-full' />
            </nav>
            <nav className='flex items-center flex-col gap-5 md:flex-row  md:gap-10'>
                <FormInputText label='City' required size='small' className='w-full' />
                <FormInputText label='District' required size='small' className='w-full' />
                <FormInputText label='Region' required size='small' className='w-full' />
            </nav>
    </div>
}

export default function StepE() {

    return (
        <div className='flex flex-col gap-5'>
            <FormHelpInscription>
                <ul>
                    <li className=' list-disc ml-5 '> Per section 13 (2) (d) of Act 992 every
                        Company must have a Registered
                        Office and this is the address to which
                        the Registrar of Companies may send
                        correspondence.</li>
                    <li className=' list-disc ml-5 mt-2'> Obtain a digital address by
                        downloading the Ghana Post GPS app
                        onto any smart phone.</li>
                    <li className=' list-disc ml-5 mt-2'>
                        To get an accurate address, stand at
                        the entrance of the said location or
                        office
                    </li>
                    <li className=' list-disc ml-5 mt-2'>
                        Applicants are to ensure that the
                        digital address provided matches with
                        the registered office address.
                    </li>
                </ul>
            </FormHelpInscription>
                    { useLocationForm()}

        </div>
    )
}
