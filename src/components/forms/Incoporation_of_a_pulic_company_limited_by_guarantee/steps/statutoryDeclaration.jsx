import React from 'react'
import FormInputText from '../../../inputs/FormInputText'
import FormInputDate from '../../../inputs/FormInputDate'

const StatutoryDeclaration = () => {
  return (
    <section className='mx-5  md:grid md:justify-center py-10 h-full'>
      <header className='grid justify-center'>
        <div className='flex flex-col text-center md:text-[17px] font-semibold text-gray-700'>
            <span>IN THE MATTER OF THE STATUTORY DECLARATIONS ACT, 1971 (ACT 389) </span>
            <span className='grid justify-center'>AND</span>
            <span className='grid justify-center'>IN THE MATTER OF A STATUTORY DECLARATION BY </span>
        </div>
        <div className='grid my-3 md:mx-20 '>
            <FormInputText label="Full Name" size='small'/>
        </div>
        <span className='font-semibold text-[17px] text-center md:justify-center md:grid text-gray-700'>PURSUANT TO THE STATUTORY DECLARATIONS ACT, 1971 (ACT 389)</span>
      </header>

      <div className='my-6'>
        <span className='md:text-base font-semibold text-gray-700 '>Title of Form</span>
        <form className='flex flex-col gap-3 mt-3'>
            <FormInputText label="Full Name" size="small"/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <FormInputText label="House Number" size="small"/>
                <FormInputText label="Landmark" size="small"/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <FormInputText label="Street Name" size="small"/>
                <FormInputText label="Town and City" size="small"/>
            </div>
        </form>
      </div>
      <div className='grid justify-center md:w-[600px] text-base text-justify'>
        <div className='flex flex-col gap-1'>
            <p>
                I, Full Name of House Number, landmark, street name, town and city the declarant herein, and in accordance with Section 172 (2) of the Companies Act, 2019
                (Act 992) do solemnly and sincerely declare as follows:

            </p>
            <div className='flex flex-col ml-6'>
                <span>
                    1. That I have not been charged with or convicted of a criminal offence
                    involving fraud or dishonesty within the last 5 years.
                </span>
                <span>
                    2. That I have not been charged with or convicted of a criminal offence
                    relating to the promotion, incorporation or management of a
                    company in the last 5 years that has become insolvent.
                </span>
                <span>
                    3. That I have not been a director or senior manager of a company that
                    has become insolvent within the last 5 years.
                </span>

            </div>
            <p>
                AND I make this solemn declaration conscientiously believing it to be true, in
                accordance with the Statutory Declarations Act, 1971 (Act 389).
            </p>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3'>
            <FormInputText label="Declared at" size="small"/>
            <FormInputDate label="Date" size="small"/>
        </div>
      </div>
    </section>
    // <section>
        
    // </section>
  )
}

export default StatutoryDeclaration
