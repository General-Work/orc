import React from 'react'
import DotLoader from 'react-spinners/DotLoader'

const Loader = () => {
  return (
    <div className='relative '>
        <div className='absolute  w-screen h-screen grid justify-center items-center z-[10000]'>
            <DotLoader color="#f59b42" loading  size={120} aria-label="Dot Loader" />
        </div>
    </div>
  )
}

export default Loader
