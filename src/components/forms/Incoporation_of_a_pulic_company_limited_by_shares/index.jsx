import React from 'react'
import PageForm from "./FormPage"
import FormHeader from '../../layout/FormHeader'
import FormProvider from './hooks/FormContext'

const Index = () => {
  return (
    <>
        <FormHeader>
          <div className="text-[#ebe834]">
            <span className='text-base md:text-2xl uppercase font-semibold backdrop-filter '>Incoporation of a public company limited by shares</span>
            <div className='flex  gap-2 font-medium'>
                <span>THE COMPANIES ACT, 2019 (ACT 992) - </span>
                <span className='grid justify-center drop-shadow-md shadow-white'>FORM 3</span>
            </div>
            
          </div>
        </FormHeader>
        <div className="absolute px-4 md:px-10 ">
          <div className="relative bottom-12  rounded-md bg-white overflow-y-auto h-[670px]">
            <FormProvider>
              <PageForm/>
            </FormProvider>
          </div>
        </div>
    </>
  )
}

export default Index
