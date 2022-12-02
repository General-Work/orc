import React, { useState } from 'react'

export function useForm (formValues) {
    const [values, setValues] = useState(formValues)

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetForm = () => {
        setValues(formValues);
        // setErrors({})
    }
    
    const handleImageChange = event => { 
        const {name, fileUploaded} = event.target.files[0];
        setValues({
            ...values,
            [name]:fileUploaded
        })
        console.log(fileUploaded)
    }

  return {
    values,
    setValues,
    handleInputChange,
    handleImageChange,
    resetForm
  }
}




export function Form(props){
    return(
        <form>
            {props.children}
        </form>
    )
}

