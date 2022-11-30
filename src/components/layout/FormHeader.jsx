import React from 'react'
import Bg from "../../assets/background.jpg"
import Bg2 from "../../assets/bg2.jpg"

const FormHeader = (props) => {
  return (
    <header>
        <div>
          <img src={Bg2} alt="background" className="object-cover w-full h-36"/>
        </div>
        <div className='absolute  '>
            <div className='relative bottom-[120px] mx-10 '>
                {props.children}
            </div>
        </div>
    </header>
  )
}

export default FormHeader
