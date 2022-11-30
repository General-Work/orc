import React from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import FormInformativeInscriptions from '../../../../components/alerts/FormInformativeInscriptions';

export default function StepD() {
    return (
        <div className='flex flex-col gap-5'>
            <nav>
                <FormInformativeInscriptions className='my-2'>
                    Specialized institutions for example
                    Banks, Insurance and Security
                    companies are required to state their
                    objects here.
                </FormInformativeInscriptions>
                <TextareaAutosize maxRows={5} placeholder='enter objects here' className='border border-gray-300 rounded-md w-full p-2 focus:outline-blue-500 ' />

            </nav>
            <nav>
                <FormInformativeInscriptions className='my-2'>
                    All other applicants who wish to
                    indicate their objects can also state
                    same in this column
                </FormInformativeInscriptions>
                <TextareaAutosize maxRows={5} placeholder='enter objects here' className='border border-gray-300 rounded-md w-full p-2 focus:outline-blue-500 ' />

            </nav>
        </div>
    )
}
