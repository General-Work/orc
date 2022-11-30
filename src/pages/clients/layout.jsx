import React from 'react'
import PageHeader from '../../components/layout/dashbord/pageHeader'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-gray-50 min-w-screen min-h-screen  '>
        <PageHeader/>

        <>
            <Outlet />
        </>
      
    </div>
  )
}

export default Layout
