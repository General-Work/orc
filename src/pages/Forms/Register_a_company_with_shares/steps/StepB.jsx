import React, { useEffect, useState } from 'react'
import FormInputText from '../../../../components/inputs/FormInputText'
import FormNoteInscription from '../../../../components/alerts/FormNoteInscription'
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function StepB() {
    const sectors = ['Legal', 'Utilities', 'Tourism', 'Insurance', 'Agriculture', 'Oil and Gas', 'Construction',
        'Telecom/ICT', 'Estate/Housing', 'Education', 'Quary/Mining', 'Entertainment', 'Food Industry', 'Manufacturing', 'Pharmaceutical', 'Security', 'Media', 'Shipping and Port', 'Hospitality', 'Health Care',
        'Security/Brokers', 'Commerce/Trading', 'Banking and Finance', 'Sanitaion', 'Transport/Aerospace', 'Fashion/Beautification',
        'Refinery of Minerals',
    ]

    const [selected,setSelected] = useState([])
        
    let ToggleSelectedItem = (i) =>{
            if(selected.includes(i)){
                setSelected((values) => values = values.filter((val) => val != i))
            }else{
                  setSelected(value=>[...value,i])
            }     
    }
    return (
        <div className=''>
            <FormNoteInscription className='my-3'>
                Choose your sector by clicking on the items provided.
                Specify sector(s).
                If your sector is not listed, write your
                sector in the space provided for
                “others”
            </FormNoteInscription>
            <ul className='flex flex-wrap items-center gap-2'>
                {sectors.map((sector, i) => {
                    return <li onClick={()=>ToggleSelectedItem(i)} className={`flex items-center gap-2 bg-blue-50 p-2 rounded-full text-sm hover:shadow-md px-3 cursor-pointer transition-all  ${selected.includes(i) && 'bg-blue-500 p-2 px-3 text-xs  text-white'}`} key={i}>
                        <label htmlFor="">{sector}</label>
                        {selected.includes(i) && <CheckCircleIcon size='small' className='text-white' /> }

                    </li>
                })}
            </ul>
            <nav className='mt-5  items-center gap-2'>
                <nav className='flex items-center gap-2 bg-blue-50 p-2 rounded-md text-sm w-max my-2 hover:shadow-md'>
                    <label htmlFor="">others(Please Specify )</label>
                    
                </nav>
                <FormInputText size="small" label='other' />
            </nav>
        </div>
    )
}
