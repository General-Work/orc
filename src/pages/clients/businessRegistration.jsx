import React from 'react'
import { useParams } from 'react-router-dom'
import RegOfComBySharedForm from '../../components/forms/reg_of_com_by_shares/index'

const Forms = {
  incoporationofaprivatecompanylimitedbyshares: <RegOfComBySharedForm/>
}


const BusinessRegistration = () => {
  const params = useParams()
  
  return (
    <div>
      {Forms[params?.id]}
    </div>
  )
}

export default BusinessRegistration
