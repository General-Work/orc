import React from 'react'
import FormHelpInscription from '../../../../components/alerts/FormHelpInscription'
import FormInformativeInscriptions from '../../../../components/alerts/FormInformativeInscriptions';
import FormInputText from '../../../../components/inputs/FormInputText'
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function StepC() {
    return (
        <div>
            <FormHelpInscription className='my-2'>
                ISIC or classification code is a standard
                classification for economic or business
                activities so that establishments could
                be classified based on the activity they
                carry out.
                A detailed list of ISIC or Classification
                Codes can be found on our website at wwww.rgd.gov.gh

                <ul>
                    <li className=' list-disc mt-5 ml-5'>
                        Select the International Standard Industrial Classification (ISIC) code number(s) for the principal
                        activity and other activities
                    </li>
                </ul>
            </FormHelpInscription>
            <nav className='flex flex-col gap-3'>
            <FormInputText  label='ISIC code 1'size='small'/>
            <FormInputText  label='ISIC code 2'size='small'/>
            <FormInputText  label='ISIC code 3'size='small'/>
            <FormInputText  label='ISIC code 3'size='small'/>
            <nav>
                <FormInformativeInscriptions className='my-2'>If you cannot determine a code, please give a brief description of the company's business activities</FormInformativeInscriptions>
                <TextareaAutosize maxRows={5} placeholder='enter description here' className='border border-gray-300 rounded-md w-full p-2 focus:outline-blue-500 ' />
            </nav>
            </nav>
        </div>
    )
}
