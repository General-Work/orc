import React from 'react'
import splideimage1 from '../../../assets/splideimage1.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeroBg from '../../../assets/hero-bg.svg'

export default function Hero() {
  return (  
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex  md:pl-10 item  md:flex-row flex-col  relative overflow-hidden">
        <div className='absolute mr-2 sm:mr-0 top-[45%] right-0 z-40  text-[#190A3C]/40 '>
          <button className='rounded-full bg-[#c7c7c781]  grid place-content-center p-1'>
            <ArrowForwardIcon sx={{fontSize: 20}}/>
          </button>
        </div>
        <div className='absolute top-[45%] ml-2 sm:ml-0 left-0 z-40  text-[#190A3C]/40 '>
          <button className='rounded-full bg-[#c7c7c781]  grid place-content-center p-1'>
            <ArrowBackIcon sx={{fontSize: 20}}/>
          </button>
        </div>
      
        <div className='absolute bottom-5 left-[48%] flex items-center gap-4'>
          <div className='rounded-full p-2 bg-gray-400'/>
          <div className='rounded-full p-2 bg-gray-400'/>
        </div>
          <img src={HeroBg} alt="heroBg" className=' absolute -bottom-[18rem] h-[35rem] -right-28 md:bottom-[unset] md:-right-96  md:h-[100rem] 
              lg:w-[70rem] lg:-top-60 transform rotate-[20deg] lg:h-[100rem]  lg:-right-64 z-10 '/>

    <div className=" px-5 self-center lg:flex-grow md:w-1/2 md:py-24 lg:pr-24 md:pr-16 flex flex-col  md:items-start md:text-left md:mb-16  items-center text-center">
      <h1 className="title-font text-2xl  md:text-4xl  lg:text-5xl mb-4 font-medium text-[#190A3C]">Our Mission
        
      </h1>
      <p className="mb-8  md:leading-relaxed text-[#190A3C]/90 text-sm md:text-sm lg:text-inherit">
      The Department’s mission is to ensure efficient and effective administration of entities inter-alia the registration of Businesses, provide friendly services and accurate data for national and economic development
t.
        </p>
     
     <div className='px-2  p-5 md:bg-purple-50/20 lg:bg-purple-50 rounded-md hidden md:block  z-20'>
      <div className='text-[#190A3C]/90 font-semibold text-lg mb-3 '>select a service</div>
     <div className="flex justify-center items-center gap-2 ">
        <select className='border border-blue-200 rounded-md p-2 text-sm'>
          <option value="">Online payment </option>
          <option value="">File Resolution </option>
          <option value="">Commence Business  </option>
          <option value="">Change in particulars</option> 
          <option value="">Entity Registration</option> 
          <option value="">Entity Registration With Tin</option> 
        </select>
        <button className="inline-flex p-2 rounded-md py-2.5 px-5 bg-blue-600 text-sm text-white">
          <ArrowForwardIcon sx={{fontSize: 20}}/>
        </button>
        
      </div>
     </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-30 relative self-end md:self-auto   ">
    <div className='px-2 absolute bottom-5 left-0  p-5 md:bg-purple-50/20 lg:bg-purple-50 rounded-md md:hidden   z-20'>
      <div className='text-[#190A3C]/90 font-semibold text-lg mb-3 '>select a service</div>
     <div className="flex justify-center items-center gap-2 ">
        <select className='border border-blue-200 rounded-md p-2 text-sm'>
          <option value="">Online payment </option>
          <option value="">File Resolution </option>
          <option value="">Commence Business  </option>
          <option value="">Change in particulars</option> 
          <option value="">Entity Registration</option> 
          <option value="">Entity Registration With Tin</option> 
        </select>
        <button className="inline-flex p-2 rounded-md py-3 px-5 bg-blue-600 text-sm text-white">
          {/* <FontAwesomeIcon icon='arrow-right' /> */}
        </button>
        
      </div>
     </div>
      <img  className="object-cover object-center  md:h-full rounded lg:h-full " alt="hero" src={splideimage1} />
    </div>
  </div>
</section>
  )
}
