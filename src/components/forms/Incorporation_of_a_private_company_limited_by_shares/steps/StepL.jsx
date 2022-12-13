import React from 'react'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
import FileUpload from '../../../inputs/FileUpload'
import FormInputSelect from '../../../inputs/FormInputSelect'
import FormInputText from '../../../inputs/FormInputText'
import FormInformativeInscriptions from '../../../alerts/FormInformativeInscriptions'
import FormInputDate from '../../../inputs/FormInputDate'
import { useLocationForm } from './StepE'
export default function StepL() {
    let locationform = useLocationForm()
    return (
        <div className='flex flex-col gap-5'>
            <FormHelpInscription>
                <ul>
                    <li className='ml-5 list-disc'>Tick the applicable qualification(s)
                    </li>
                    <li className='ml-5 list-disc'>Attach Consent Letter
                        Reference to Section 211 (1) and (3) of
                        Act 992
                    </li>
                </ul>
            </FormHelpInscription>
            <nav className='flex flex-col gap-2 '>
                <span className='flex items-center justify-between p-2 bg-gray-50 rounded-md shadow-sm text-sm'>
                    <label htmlFor="">Professional qualification </label>
                    <input type="checkbox" name="" id="" />
                </span>
                <span className='flex items-center justify-between p-2 bg-gray-50 rounded-md shadow-sm text-sm'>
                    <label htmlFor="">Tertiary level qualification  </label>
                    <input type="checkbox" name="" id="" />
                </span>
                <span className='flex items-center justify-between p-2 bg-gray-50 rounded-md shadow-sm text-sm'>
                    <label htmlFor="">Company Secretary Trainee  </label>
                    <input type="checkbox" name="" id="" />
                </span>
                <span className='flex items-center justify-between p-2 bg-gray-50 rounded-md shadow-sm text-sm'>
                    <label htmlFor="">Barrister or Solicitor in the Republic </label>
                    <input type="checkbox" name="" id="" />
                </span>
                <span className='flex items-center justify-between p-2 bg-gray-50 rounded-md shadow-sm text-sm'>
                    <label htmlFor="">Institute of Chartered Accountants
                    </label>
                    <input type="checkbox" name="" id="" />
                </span>
                <span className='flex items-center justify-between p-2 bg-gray-50 rounded-md shadow-sm text-sm'>
                    <label htmlFor="">Under the supervision of a qualified Company Secretary
                    </label>
                    <input type="checkbox" name="" id="" />
                </span>
                <span className='flex items-center justify-between p-2 bg-gray-50 rounded-md shadow-sm text-sm'>
                    <label htmlFor="">Institute of Chartered Secretaries and Administrators
                    </label>
                    <input type="checkbox" name="" id="" />
                </span>
                <span className='flex items-center justify-between p-2 bg-gray-50 rounded-md shadow-sm text-sm'>
                    <label htmlFor="">By virtue of an academic qualification, member of a professional body, appears to the
                        directors as capable of performing the functions of Secretary of the Company
                    </label>
                    <input type="checkbox" name="" id="" />
                </span>
                <FileUpload label='Attach Consent Letter' />
            </nav>
            <nav className='flex flex-col md:flex-row items-center gap-5 mt-2'>
                <FormInputSelect size='small' label='Title' name='title' value='Mr' options={[{ name: 'Mr', value: 'Mr' }, { name: 'Mrs', value: 'Mrs' }, { name: 'Miss', value: 'Miss' }, { name: 'Ms', value: 'Ms' }, { name: 'Dr', value: 'Dr' }]} />
                <FormInputText className='w-full' label='First Name' size='small' />
                <FormInputText className='w-full' label='Middle Name' size='small' />
                <FormInputText className='w-full' label='Last Name' size='small' />
            </nav>
            <FormInputText className='w-full' label='Any Former Name' size='small' />
            <nav className='flex flex-col md:flex-row items-center gap-5'>
                <FormInputText className='w-full' type='text' label='Tin' size='small' />
                <FormInputText className='w-full' type='text' label='Ghana Card' size='small' />
            </nav>
            <FormInformativeInscriptions>
                Without Tin fill GRA attached forms
            </FormInformativeInscriptions>
            <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputSelect size='small' label='Gender' name='Gender' value='Male' options={[{ name: 'Male', value: 'Male' }, { name: 'Female', value: 'Female' }]} />
            <FormInputText className='w-full' label='Nationality' size='small' />
        </nav>
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputDate size='small' className='w-full' label='Date of Birth' onChange={() => null} />
            <FormInputText className='w-full' label='Place of Birth' size='small' />
        </nav>
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputText className='w-full' type='number' required label='Mobile No 1' size='small' />
            <FormInputText className='w-full' type='number' label='Mobile No 2' size='small' />
        </nav>
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <FormInputText className='w-full' type='text' required label='Fax' size='small' />
            <FormInputText className='w-full' type='text' label='email' required size='small' />
        </nav>
        <FormInputText className='w-full' type='text' required label='Occupation' size='small' />
        <nav className=' border-b'>
            <label className='text-gray-500'>Residential Address</label>
        </nav>
        <FormHelpInscription>
            <ul>
                <li className='list-disc ml-5 '>
                    This address when provided will not
                    appear on public record, unlike that of
                    the Company.
                </li>
                <li className='list-disc ml-5 '>
                    Applicants are to ensure that the
                    digital address provided matches with
                    the residential address provided.
                </li>
            </ul>
        </FormHelpInscription>
        <nav>
            {locationform}
            <span className='mt-5 flex flex-col md:flex-row gap-5 items-center  w-full '>
                <FormInputText className='w-full ' type='text' label='Country' required size='small' />
                <FormInputText className='w-full ' type='text' label='Email Address' required size='small' />
            </span>
        </nav>
        </div>
    )
}
