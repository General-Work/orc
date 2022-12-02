import React, { useState } from 'react'
import { useLocationForm } from './StepE'
import FormHelpInscription from '../../../alerts/FormHelpInscription'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
export default function StepG() {
    let locationform = useLocationForm()
    const [newLocationData, setNewLocationData] = useState([
        {

        }
    ])
    let addNewLocationData = () => {
        setNewLocationData((data)=>[...data,{}]) 
    }
    let removeLocationData = (i) =>{  
        setNewLocationData((data)=>data = data.filter((item,index)=>index != i) )
    }
    
    let isEven = (i) =>{
        return i % 2 == 0 
    }

    return (
        <div className='flex flex-col gap-3'>
            <FormHelpInscription>
                Companies that have multiple
                operational locations must complete
                this section
            </FormHelpInscription>
            <ul className='flex flex-col gap-5'>
                {
                    newLocationData.map((data, i) => <li className={`py-5 my-2 rounded-md shadow-sm focus-within:shadow-md hover:shadow-md  px-2 ${ isEven(i) ? 'bg-gray-50/70' :'bg-blue-50/50'}`} key={i}>
                        <nav className='w-full flex items-center justify-between text-sm mb-2'>
                            <span className='h-5 w-5 p-1 grid place-content-center bg-blue-500 text-white rounded-full text-xs'>{i+1}</span>
                            <button onClick={()=>removeLocationData(i)}>
                                <DeleteIcon size='small' className='text-red-300'/>
                            </button>
                            </nav>
                        {locationform}
                    </li>)
                }
            </ul>
            <nav className='flex items-center justify-center gap-5'>
                <Tooltip disableFocusListener title="click to add more location data">
                <button onClick={()=>addNewLocationData()}>
                <AddCircleIcon className='text-gray-500 cursor-pointer hover:text-gray-600' />
                </button>
                </Tooltip>
            </nav>
        </div>
    )
}
