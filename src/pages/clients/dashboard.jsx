import React,{useState} from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CalculateIcon from '@mui/icons-material/Calculate';
import OptionsModal from '../../components/layout/dashbord/optionsModal';
import BusinessIcon from '@mui/icons-material/Business';
import MarriageIcon from '../../assets/mg.png'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FindReplaceIcon from '@mui/icons-material/FindReplace';

const container = [
  {id: 1, style: 'bg-blue-100 text-blue-600', icon: <BusinessIcon sx={{fontSize: 40}} />, name: "Business Registration", 
    subServices: [
      {id: 1, name: "Registration of a Company with Shares"}
    ]}, {id: 2, style: 'bg-orange-100 text-orange-600', icon: <BusinessCenterIcon sx={{fontSize: 40}}/>}, 
  {id: 3, style:'bg-gray-100 text-gray-600', image: MarriageIcon},{id: 4, style: 'bg-cyan-100 text-cyan-600', icon: <DriveFileRenameOutlineIcon sx={{fontSize: 40}}/>}, 
  {id: 5, style: 'bg-green-100 text-green-600', icon: <CalculateIcon sx={{fontSize: 40}}/>}, {id: 6, style:'bg-indigo-100 text-indigo-600', icon: <FindReplaceIcon sx={{fontSize: 40}}/> },
]

const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const [selectedService, setSelectedService] = useState([])

  const getSelectedService = (val) => {
    setSelectedService(val)
    setOpen(true)
  }

  return (
    < >
        <div className='sticky top-16 z-30 bg-slate-50'>
         
          <div className='grid justify-center text-lg md:text-[35px] pt-10 pb-4 font-semibold text-gray-500 text-center mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-32'>
            Access all our services by clicking on any of the options below... 
          </div>
        </div>
      
        <div className='overflow-y-auto  py-6 mx-4 max-h-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14  sm:px-8 md:px-12 lg:px-16 xl:px-32 2xl:px-64'>
            {container.map((d) => {
              return(
                <div 
                  key={d.id} 
                  onClick={_ => getSelectedService(d.subServices)}
                  className='rounded-md shadow-md px-10 py-14 bg-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 md:hover:scale-110 duration-300'
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
                      <span className='grid justify-center text-xl font-bold text-yellow-400 mb-4'>
                        {d.name ? d.name : `Name of Service ${d.id}`}
                      </span>
                      <p className='text-center text-gray-500 font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
