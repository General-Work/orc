import React from 'react'
import FormInputText from '../../../inputs/FormInputText'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
import FileUpload from '../../../inputs/FileUpload'

export default function StepN() {
    return (
        <div className='flex flex-col gap-5'>
            <FormHelpInscription>
                <ul className=' leading-5 '>
                    <li className='list-disc ml-5 '>
                        A person shall be appointed an Auditor
                        of a private company if that person is
                        qualified and licensed in accordance
                        with the Chartered Accountants Act,
                        1963 (Act 170). See section 138 (1) and
                        (2) of Act 992.

                    </li>
                    <li className='list-disc ml-5 '>
                        Applicant needs to attach an Auditor’s
                        consent letter to this application
                        before submission.
                    </li>
                    <li className='list-disc ml-5 '>
                        All Auditors shall hold office for a term
                        of not more than six years and are
                        eligible for appointment after a coolingoff period of not less than six years.
                        Refer to section 139 (11)
                    </li>
                </ul>
            </FormHelpInscription>
            <nav className='flex items-center flex-col gap-5 md:flex-row  md:gap-10'>
                <FormInputText label='TIN' required size='small' className='w-full' />
                <FormInputText label='Ghana Card' required size='small' className='w-full' />
            </nav>
            <FormInputText label="Auditor's Firm Name"  required size='small' className='w-full' />

            <fieldset className='flex items-center flex-col gap-5 md:flex-row p-5 border border-gray-300 md:gap-10'>
                <legend className='ml-5 py-1 px-2 text-sm bg-blue-50 rounded-md shadow-sm '>
                 Auditor's Firm Address
                </legend>
                <FormInputText label=" P.O.Box " required size='small' className='w-full' />
                <FormInputText label='PMB/DTD' required size='small' className='w-full' />
                {/* <FormInputText label='Ghana Card' required size='small' className='w-full' /> */}

            </fieldset>
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
            <nav className='flex items-center flex-col gap-5 md:flex-row  md:gap-10'>
                <FormInputText label='Mobile No.' required size='small' className='w-full' />
                <FormInputText label='Office No.' required size='small' className='w-full' />
            </nav>
            <FileUpload label='Attach Conset Letter from Auditor'/>

        </div>
    )
}
