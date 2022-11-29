import React from 'react'
import { useParams } from 'react-router-dom'


const BusinessRegistration = () => {
    const params = useParams()
  return (
    <div>
      busin
      <div>{params?.id}</div>
    </div>
  )
}

export default BusinessRegistration
