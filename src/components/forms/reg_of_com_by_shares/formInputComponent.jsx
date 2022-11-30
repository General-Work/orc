import React from 'react'
import ConsentToActAsComDir from './pages/consentToActAsComDir'
import ConsentToActAsComSec from './pages/consentToActAsComSec'
import useFormContext from './hooks/useFormContext'
import StatutoryDeclaration from './pages/statutoryDeclaration'

const FormInputComponent = () => {
    const {page} = useFormContext()

    const forms = {
        0: <ConsentToActAsComDir/>,
        1: <ConsentToActAsComSec/>,
        2: <StatutoryDeclaration/>
    }
  return (
    <div>
      {forms[page]}
    </div>
  )
}

export default FormInputComponent
