import React from 'react'
import InfoIcon from '@mui/icons-material/Info';


export default function FormInformativeInscriptions(props) {
    return (
        <div className={`flex items-center gap-2 text-sm rounded-md p-3 text-blue-600 bg-blue-50 ${props.className}`}>
            <InfoIcon size='small' />
            <span>
                {props.children}
            </span>
        </div>
    )
}
