import React from 'react'
import { useLocationForm } from './StepE'
import FormInformativeInscriptions from '../../../alerts/FormInformativeInscriptions'



export default function StepF() {
    let locationform = useLocationForm()
    return (
        <div className='flex flex-col gap-5 p-2'>

            <fieldset className='border '>
                <legend className='mx-3 '>
                    <FormInformativeInscriptions>
                        Is the Principal place of Business the same as the Registered Office Address?
                    </FormInformativeInscriptions>
                </legend>
                <nav className='flex flex-col gap-5 px-3 py-3'>
                    <span className='flex items-center gap-1 text-sm'>
                        <label htmlFor="">
                            <h3 className='inline font-semibold'>If Yes</h3> (Tick the box and proceed with other Place of Business)
                        </label>
                        <input type="checkbox" name="" id="" />
                    </span>
                    <span className='text-sm'>
                    <h3 className='inline font-semibold'>If No</h3> (Provide Details Below)
                </span>
                </nav>
               
            </fieldset>
            {locationform}
        </div>
    )
}
