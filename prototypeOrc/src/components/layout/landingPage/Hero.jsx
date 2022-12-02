
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useEffect, useMemo, useState } from 'react'
import Herosvg from './Herosvg'
import Heroselectservice from './Heroselectservice'
import image1 from '../../../assets/splideimage1.png'
import image2 from '../../../assets/splideimage2.png'
export default function Hero() {
  const [currImageIndex, setcurrImageIndex] = useState(1)
  let renderables = [
    { imageSource: image1 },
    { imageSource: image2 }
  ]
  let increaseIndex = () => {
    setcurrImageIndex((value) => value + 1)
  }
  let decreaseIndex = () => {
    setcurrImageIndex((value) => value - 1)
  }
  let resetIndex = () => {
    setcurrImageIndex((value) => value = 1)
  }
  useEffect(() => {
    let interval = setInterval(() => {
      increaseIndex()
    }, 9000)
    return () => clearInterval(interval)
  }, [])
  useMemo(() => {
    if (currImageIndex > renderables.length) {
      resetIndex()
    }
  }, [currImageIndex])

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex  md:pl-10 item  md:flex-row flex-col  relative overflow-hidden">
        <div className='absolute mr-2 sm:mr-0 top-[45%] right-0 z-40  text-[#190A3C]/40 '>
          <button className='rounded-full bg-[#c7c7c781]  grid place-content-center p-1'>
            <ArrowForwardIcon sx={{ fontSize: 20 }} />
          </button>
        </div>
        <div className='absolute top-[45%] ml-2 sm:ml-0 left-0 z-40  text-[#190A3C]/40 '>
          <button className='rounded-full bg-[#c7c7c781]  grid place-content-center p-1'>
            <ArrowBackIcon sx={{ fontSize: 20 }} />
          </button>
        </div>
        <div className='absolute bottom-5 left-[48%] flex items-center gap-4'>
          {renderables.map((rd, i) =>
            <button key={i}
            className={`${currImageIndex == i+1 ? ' transform scale-125 transition-transform rounded-full bg-purple-700  grid place-content-center p-2' 
            : ' transition-transform rounded-full   bg-[#c7c7c781] grid place-content-center p-2'}`}
           >
            </button>
          )}
          
        </div>
        <Herosvg />
        <div className=" px-5 self-center lg:flex-grow md:w-1/2 md:py-24 lg:pr-24 md:pr-16 flex flex-col  md:items-start md:text-left md:mb-16  items-center text-center">
          <h1 className="title-font text-2xl  md:text-4xl  lg:text-5xl mb-4 font-medium text-[#190A3C]">
            Our Mission
          </h1>
          <p className="mb-8  md:leading-relaxed text-[#190A3C]/90 text-sm md:text-sm lg:text-inherit">
            The Department’s mission is to ensure efficient and effective administration of entities inter-alia the registration of Businesses, provide friendly services and accurate data for national and economic development
            t.
          </p>
          <div className='px-2  p-5 md:bg-purple-50/20 lg:bg-purple-50 rounded-md hidden md:block  z-20'>
            <div className='text-[#190A3C]/90 font-semibold text-lg mb-3 '>select a service</div>
            <div className="flex justify-center items-center gap-2 ">
              {/* select service form */}
              <Heroselectservice />
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-30 relative self-end md:self-auto   ">
          <div className='px-2 absolute bottom-5 left-0  p-5 md:bg-purple-50/20 lg:bg-purple-50 rounded-md md:hidden   z-20'>
            <div className='text-[#190A3C]/90 font-semibold text-lg mb-3 '>select a service</div>
            <div className="flex justify-center items-center gap-2 ">
              {/* select service form */}
              <Heroselectservice />
            </div>
          </div>
          {renderables.map((rd, i) => currImageIndex == i + 1 && <img key={i} data-aos="animate-scale-bit" data-aos-duration="9000" data-aos-once="false" className="object-cover object-center   md:h-full rounded lg:h-full " alt="hero" src={rd.imageSource} />)}
        </div>
      </div>
    </section>
  )
}
