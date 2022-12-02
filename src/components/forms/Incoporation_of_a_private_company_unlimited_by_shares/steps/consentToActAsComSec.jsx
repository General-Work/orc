import React from 'react'
import FormInputText from '../../../inputs/FormInputText'

const ConsentToActAsComSec = () => {
  return (
    <section className='mx-5  md:grid md:justify-center py-10 h-full'>
      <header className='grid justify-center'>
        <span className='uppercase font-semibold text-lg text-center md:text-[26px] text-gray-700'>consent to act as a company Secretary</span>
        <div className='grid justify-center mt-2'>
            <div className='flex md:flex-col gap-2 md:gap-1 md:text-base'>
                <span>SECTION 221 (8)</span>
                <span className='uppercase grid justify-center'>form 26 (b)</span>
            </div>
        </div>
      </header>
      <div className=' mt-5 md:grid md:justify-center'>
        <form className='flex flex-col gap-4 md:gap-5 md:w-[570px]'>
            <FormInputText label="Proposed Company Name"/>
            <p className='mx-2'>
                I hereby consent to act as the Company Secretary of the above-named Company upon its Registration.
            </p>
            <span className='md:text-lg font-semibold text-gray-700'>Personal Details</span>
            <FormInputText label="Full Name"/>
            <FormInputText label="Former Name (if applicable)"/>
            <FormInputText label="Residential Address"/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <FormInputText label="P. O. Box Number"/>
                <FormInputText label="Contact"/>
            </div>
            <FormInputText label='My qualification under Section 211(3) of Act 992 is' multiline rows={3}/>
        </form>
      </div>
    </section>
  )
}

export default ConsentToActAsComSec
