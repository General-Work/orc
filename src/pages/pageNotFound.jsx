import { Button } from '@mui/material'
import {useNavigate} from "react-router-dom";
import React from 'react'
import ErrorImage from "../assets/errorImage.png"


const PageNotFound = () => {
    const navigate = useNavigate()

    const goHome = () => {
      navigate("/")

    }
  return (
    <div className='w-screen h-screen grid items-center justify-center'>
      <div className='mx-auto'>
        <img src={ErrorImage} alt="" className='w-[500px]'/>
        <span className='font-semibold grid place-content-center text-lg py-2'>404 - PAGE NOT FOUND</span>
        <div className='grid place-content-center '>
            <span className='text-center w-[400px]'>The page you are looking for might have been removed, had its name changed or is temporarily unavailable</span>
        </div>
        <div className='grid place-content-center my-3'>
             <Button onClick={goHome}>Go to Home</Button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
