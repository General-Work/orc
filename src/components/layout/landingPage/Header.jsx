import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {Link, useLocation} from "react-router-dom"
import image from '../../../assets/COA.png'
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  {name: 'Home', path: '/'}, {name: 'Contact', path: '/contact'}, {name:'Services', path: '/services'}
]
export default function Header() {
   const [showDrop, setshowDrop] = useState(false)
   const [scrollheight,setscrollheight] = useState(0)
   let navdrop = useRef('navdrop')
   let paddednav = useRef('paddednav')
   let favimage = useRef('favimage')
   const location = useLocation()
  
  
   useLayoutEffect(()=>{
      if(showDrop){
         navdrop.current.style.height = `${scrollheight}.px`
      }else{
         navdrop.current.style.height =0
      } 
   },[showDrop])
   
   useEffect(()=>{
      

      let setScrolledEffect = () =>{
         if(window.scrollY > 0 ){
            paddednav.current.classList.remove('addpadding') 
            favimage.current.style.height = '2rem'
            favimage.current.style.width = '2.5rem'
         }else{
            paddednav.current.classList.add('addpadding')
            favimage.current.style.height = '3rem'
            favimage.current.style.width = '3.5rem'
         }
        
      }

      window.addEventListener('scroll', setScrolledEffect,true);

      return () => {
        window.removeEventListener('scroll', setScrolledEffect,true);
      };

      
    },[])
   useEffect(()=>{
      setscrollheight(navdrop.current.scrollHeight)
   },[])
   
  return (
    <div className=' text-gray-500 sticky top-0 z-50 bg-white'>
         <div className='relative'>
        <div className='container mx-auto bg-white px-5 '>
           <nav className='flex justify-between items-center transition-[padding] duration-500  ' ref={paddednav} >
            <span className='flex gap-5 items-center w-max grow  '>
               <img src={image} ref={favimage} alt="" className=' aspect-square h-12 w-14 transition-all duration-500'/>
               <span className='text-sm'><h3 className='inline text-gray-600 font-semibold'> Office of the Registrar of Companies </h3></span>
            </span>
            <span className='inline md:hidden'>
               <MenuIcon className='cursor-pointer' onClick={()=>setshowDrop(!showDrop)} />
            </span>
            <div className=' text-sm'>
              <div className='hidden md:flex items-center'>
                {menuItems.map((e,i) => {
                  return (
                    <Link key={i} to={e.path} className={`linkitem inline-block duration-200 py-5 px-4 mx-1 ${location.pathname === e.path ?'border-b-2 border-blue-600': 'hover:border-b-2'}`}>{e.name}</Link>
                  )
                })}
                  
                  <Link to="/auth" className='p-2 md:ml-3 lg:ml-10 rounded-md px-5 text-sm hover:border ml-2 border-blue-600 hover:text-blue-600'>Login</Link>
                  <Link to="/auth" className='p-2 ml-3 rounded-md px-5 bg-blue-600 text-sm text-white'>Sign up</Link>

              </div>
        </div>
            
           </nav>
        </div>
    </div>
      <div ref={navdrop} className={`absolute z-100 md:hidden flex flex-col bg-white w-full items-center text-sm shadow-md overflow-hidden transition-[height] duration-300 h-0 `}>
               <Link to='/' className='pl-5 hover:bg-blue-100 hover:text-blue-800 linkitem inline-block duration-200 py-3 px-4 bg-gray-100 w-full'>Home</Link>
                <Link to='/contact' className='pl-5 hover:bg-blue-100 hover:text-blue-800 linkitem  inline-block py-3 px-4  w-full'>Contact</Link>
                <Link to='/services' className='pl-5 hover:bg-blue-100 hover:text-blue-800 linkitem  inline-block py-3 px-4 bg-gray-100 w-full'>Services</Link>
                <Link to='/auth' className='pl-5 hover:bg-blue-100 hover:text-blue-800 linkitem  inline-block py-3 px-4 w-full'>Login</Link>
                <Link to='/auth' className='pl-5 hover:bg-blue-100 hover:text-blue-800 linkitem  inline-block py-3 px-4 w-full bg-gray-100'>sign up</Link>
                
      </div>
     
    </div>
  )
}

