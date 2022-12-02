import React from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function FileUpload(props) {
  return (
    <div className="overflow-hidden relative w-full mt-1 rounded-md ">
    <button className="bg-blue-400 hover:bg-blue-light text-white font-bold py-2 px-4 w-full inline-flex items-center">
        <FileUploadIcon />
        <span className="ml-2 text-sm font-normal">{props.label}</span>
    </button>
    <input
        className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t"
        type="file"
        name="documents[]"
        accept="image/*"
    />
</div>
  )
}
