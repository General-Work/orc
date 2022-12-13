import React from 'react'
import FormInputText from '../../../inputs/FormInputText'

const ConsentToActAsComDir = () => {
  return (
    <section className='mx-10  md:grid md:justify-center py-10 h'>
      <header className='grid justify-center'>
        <span className='uppercase font-semibold text-lg text-center  text-gray-700'>consent to act as a company director</span>
        <div className='grid justify-center mt-2'>
            <div className='flex md:flex-col gap-2 md:gap-1 md:text-base'>
                <span>SECTION 172 (2) b</span>
                <span className='uppercase grid justify-center'>form 26 (a)</span>
            </div>
        </div>
      </header>
      <div className=' mt-5 md:grid md:justify-center'>
        <form className='flex flex-col gap-3 md:gap-5 md:w-[570px]'>
            <FormInputText label="Proposed Company Name" size="small"/>
            <p className='mx-2'>
                I hereby consent to act as the Director of the above-named Company upon its Registration.
            </p>
            <span className='md:text-lg font-semibold text-gray-700'>Personal Details</span>
            <FormInputText label="Full Name" size="small"/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <FormInputText label="Former Name (if applicable)" size="small"/>
              <FormInputText label="P. O. Box Number" size="small"/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <FormInputText label="Residential Address" size="small"/>
              <FormInputText label="Contact" size="small"/>
            </div>


        </form>
      </div>
    </section>
  )
}

export default ConsentToActAsComDir
