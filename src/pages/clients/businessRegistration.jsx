import React from 'react'
import { useParams } from 'react-router-dom'
import RegOfComBySharedForm from '../../components/forms/reg_of_com_by_shares/reg_of_com_by_shares_Form'



const BusinessRegistration = () => {
    const params = useParams()
  return (
    <div>
      <RegOfComBySharedForm/>
    </div>
  )
}

export default BusinessRegistration
