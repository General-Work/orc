import React from 'react'
import PageHeader from '../../components/layout/dashbord/pageHeader'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-gray-200 min-w-screen min-h-screen  '>
        <PageHeader/>

        <div className='h-full'>
            <Outlet />
        </div>
      
    </div>
  )
}

export default Layout
