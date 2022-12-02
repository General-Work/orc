import React from 'react'
import { useParams } from 'react-router-dom'
import RegOfComBySharedForm from '../../components/forms/reg_of_com_by_shares/index'
import Incoporationofapuliccompanylimitedbyshares from '../../components/forms/Incoporation_of_a_pulic_company_limited_by_shares/index'
import Incoporationofaprivatecompanyunlimitedbyshares from '../../components/forms/Incoporation_of_a_private_company_unlimited_by_shares'
import Incoporationofaprivatecompanylimitedbyguarantee from '../../components/forms/Incoporation_of_a_private_company_limited_by_guarantee'
import Incoporationofapuliccompanylimitedbyguarantee from '../../components/forms/Incoporation_of_a_pulic_company_limited_by_guarantee'
import Incoporationofanunlimitedpubliccompany from '../../components/forms/Incoporation_of_an_unlimited_public_company'
import Incoporationofaprivatepartnership from '../../components/forms/Incoporation_of_a_private_partnership'
import Incoporationofaprofessionalbody from '../../components/forms/Incoporation_of_a_professional_body'
import Registrationofanexternalorforeigncomapny from '../../components/forms/Registration_of_an_external_foreign_comapny'
import Processofregistraionofsoleproprietor from '../../components/forms/Process_of_registraion_of_sole_proprietor'
import Registraionofasubsidiary from '../../components/forms/Registraion_of_a_subsidiary'

const Forms = {
  incoporationofaprivatecompanylimitedbyshares: <RegOfComBySharedForm/>,
  incoporationofapubliccompanylimitedbyshares: <Incoporationofapuliccompanylimitedbyshares/>,
  incoporationofaprivatecompanyunlimitedbyshares: <Incoporationofaprivatecompanyunlimitedbyshares/>,
  incoporationofaprivatecompanylimitedbyguarantee: <Incoporationofaprivatecompanylimitedbyguarantee/>,
  incoporationofapubliccompanylimitedbyguarantee: <Incoporationofapuliccompanylimitedbyguarantee/>,
  incoporationofanunlimitedpubliccompany: <Incoporationofanunlimitedpubliccompany/>,
  incoporationofaprivatepartnership: <Incoporationofaprivatepartnership/>,
  incoporationofaprofessionalbody: <Incoporationofaprofessionalbody/>,
  registrationofanexternalforeigncomapny: <Registrationofanexternalorforeigncomapny/>,
  processofregistraionofsoleproprietor: <Processofregistraionofsoleproprietor/>,
  registraionofasubsidiary: <Registraionofasubsidiary/>
}


const BusinessRegistration = () => {
  const params = useParams()
  
  return (
    <div>
      {params?.id in Forms ? 
        Forms[params?.id]
      :
      <div className='grid justify-center items-center w-screen h-96'>
        <span className="text-3xl font-semibold text-gray-700">{params?.id} Coming Soon</span>
      </div>
    }
    </div>
  )
}

export default BusinessRegistration
