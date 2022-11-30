import React from 'react'
import PageForm from "./FormPage"
import FormHeader from '../../layout/FormHeader'
import FormProvider from './hooks/FormContext'



const Reg_of_com_by_shares_Form = () => {
  return (
    <>
        <FormHeader>
          <div className="text-yellow-500">
            <span className=' text-2xl uppercase font-semibold '>Application to register a company with shares</span>
            <div className='flex  '>
                <span>THE COMPANIES ACT, 2019 (ACT 992)</span>
                <span className='grid justify-center'>FORM 3</span>
            </div>
            
          </div>
        </FormHeader>
        <div className="absolute  px-10 ">
          <div className="relative bottom-12  rounded-md bg-white overflow-y-auto h-[670px]">
            <FormProvider>
              <PageForm/>
            </FormProvider>
          </div>
        </div>
    </>
  )
}

export default Reg_of_com_by_shares_Form
