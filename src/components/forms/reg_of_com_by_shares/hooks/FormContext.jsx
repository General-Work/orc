import { createContext, useState, useEffect } from "react"


export const FormContext = createContext({})

const FormProvider = ({children}) => {

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
      
    })

    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
  return (
    <FormContext.Provider value={{ data, setData, handleChange, page, setPage}}>
        {children}
    </FormContext.Provider>
  )
}

export default FormProvider
