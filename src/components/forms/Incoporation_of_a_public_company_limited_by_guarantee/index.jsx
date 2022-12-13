import React from 'react'
import PageForm from "./FormPage"
import FormHeader from '../../layout/FormHeader'
import FormProvider from './hooks/FormContext'



const Reg_of_com_by_shares_Form = () => {
  return (
    <>
        <FormHeader>
          <div className="text-[#ebe834]">
            <span className='text-base md:text-2xl uppercase font-semibold backdrop-filter '>Incoporation of a public company limited by guarantee</span>
            <div className='flex  gap-2 font-medium'>
                <span>THE COMPANIES ACT, 2019 (ACT 992) - </span>
                <span className='grid justify-center drop-shadow-md shadow-white'>FORM 3</span>
            </div>
            
          </div>
        </FormHeader>
        <div className="container  mx-auto transform translate-y-[-50px]">
          <div className=" p-5 rounded-md bg-white h-max min-h-screen">
            <FormProvider>
              <PageForm/>
            </FormProvider>
          </div>
        </div>
    </>
  )
}

export default Reg_of_com_by_shares_Form
