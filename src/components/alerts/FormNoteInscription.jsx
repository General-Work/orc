import React from 'react'
import HelpIcon from '@mui/icons-material/Help';

export default function FormNoteInscription(props) {
  return (
    <div className={`text-yellow-600 font-medium text-xs md:text-sm flex items-center gap-2 p-3 bg-orange-50/60 rounded-md  ${props.className}`}>
        <HelpIcon className='' fontSize="small"/>
        <span>{props.children}</span>
    </div>
  )
}
