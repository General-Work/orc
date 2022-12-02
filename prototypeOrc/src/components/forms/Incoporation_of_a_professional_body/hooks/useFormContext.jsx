import { useContext } from "react"
import {FormContext} from "../hooks/FormContext"

const useFormContext = () => {
    return useContext(FormContext)
}

export default useFormContext