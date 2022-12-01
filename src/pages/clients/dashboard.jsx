import React,{useState} from 'react'
import Menus from '../../components/layout/dashbord/scripts/menuData';
import OptionsModal from '../../components/layout/dashbord/optionsModal';




const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const [selectedService, setSelectedService] = useState([])

  const getSelectedService = (val) => {
    setSelectedService(val)
    setOpen(true)
  }

  return (
    < >
        <div className=' bg-gray-200'>
         
          <div className='grid justify-center text-lg md:text-[35px] pt-4 md:pt-10 pb-4 font-semibold text-gray-500 text-center mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-32'>
            Access all our services by clicking on any of the options below... 
          </div>
        </div>
      
        <div className='overflow-y-auto  py-6 mx-4 max-h-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  sm:px-8 md:px-12 lg:px-16 xl:px-32 2xl:px-64'>
            {Menus.map((d) => {
              return(
                <div 
                  key={d.id} 
                  onClick={_ => getSelectedService(d.subServices)}
                  className='rounded-md shadow-md p-10 bg-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 md:hover:scale-110 duration-300'
                  >
                    <div className=''>
                      <div className='grid justify-center  mb-5'>
                        <button 
                          className={`w-16 h-16 rounded-full ${d.style}`}
                        >
                          {d.icon && d.icon}
                          {d.image && 
                            <div className='grid place-content-center'>
                              <img src={d.image} alt="image" className='w-10 h-10'/>
                            </div>
                          }
                        </button>
                      </div>
                      <span className='grid justify-center text-xl font-bold text-yellow-400 mb-4 text-center'>
                        {d.name}
                      </span>
                      <p className='text-center text-gray-500 font-semibold'>{d.desc}</p>
                    </div>
                  </div>
              )
            })}
          </div>
      </div>
      <OptionsModal open={open} selectedService={selectedService}
        onClose={_ => {
          setSelectedService([])
          setOpen(false)
        }}
      />
      
    </>
  )
}

export default Dashboard
