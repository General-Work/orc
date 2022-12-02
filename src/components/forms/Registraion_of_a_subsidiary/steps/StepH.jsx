import React from 'react'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
import { useLocationForm } from './StepE'
import FormInputText from '../../../inputs/FormInputText'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
export default function StepH() {
    const locationform = useLocationForm()
    return (
        <div className='flex flex-col gap-5'>
            <FormHelpInscription>
                A Register of Members is a register
                that contains the names and addresses
                of members of an incorporated
                Company.
                <br />
                It is required that every company
                keeps and maintains a Register of its
                Members at a location in the country
            </FormHelpInscription>
            {locationform}
            <fieldset className='border p-3 border-gray-300 flex flex-col gap-5'>
                <legend className=' ml-3 text-sm text-gray-600'>Postal Address</legend>
                <FormInputText label='C/O' size='small' />
                <nav>
                <FormControl sx={{ fontSize: "3rem" }}>
                <FormLabel id="demo-controlled-radio-buttons-group">Type</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group" 
                        className='flex'   
                    >
                        <FormControlLabel size='small' value="P.O. BOX" control={<Radio />} label="P.O. BOX" />
                        <FormControlLabel size='small' value="PMB" control={<Radio />} label="PMB" />
                        <FormControlLabel size='small' value="DTD" control={<Radio />} label="DTD" />
                    </RadioGroup>
                </FormControl>
                </nav>
                <nav className='flex items-center flex-col gap-5 md:flex-row  md:gap-10'>
                    <FormInputText label='Number' required size='small' className='w-full' />
                    <FormInputText label='Town' required size='small' className='w-full' />
                    <FormInputText label='Region' required size='small' className='w-full' />
                </nav>
            </fieldset>

        </div>
    )
}
