import React from 'react'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
import FormInformativeInscriptions from '../../../alerts/FormInformativeInscriptions'
import WarningIcon from '@mui/icons-material/Warning';
export default function StepV() {
    return (
        <div className='flex flex-col gap-5'>
            <FormHelpInscription>
            Section 35 (14) and (15) of Act 992
            </FormHelpInscription>
            <FormInformativeInscriptions>
                <ul>
                    <li className='ml-5 list-disc'>
                A beneficial owner (or owners) is the individual or natural person who owns, controls, has interest in,
                or exercises influence over the legal person (or arrangement) or receives substantial benefit from the
                applicant’s activity. 
                    </li>
                    <li className='ml-5 list-disc'>
                    A beneficial owner is an individual and cannot be a company
                    </li>
                </ul>
              
            </FormInformativeInscriptions>
            <nav className='flex gap-2 items-center bg-red-50/60 p-3 text-red-400 rounded-md shadow-sm'>
                <WarningIcon size='small' className=''/> 
                <span>
                Failure to disclose is an offence and will attract sanctions and penalties
                </span>
            </nav>
            <nav className='text-left my-2 font-semibold text-gray-500'>Fill the BO Form attached </nav>
        </div>
    )
}
