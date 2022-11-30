import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Index() {
  return (
    <div>
        <div className='container mx-auto'>
        <Outlet/>
        </div>
    </div>
  )
}
