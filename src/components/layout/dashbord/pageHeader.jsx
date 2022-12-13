import React,{useState} from 'react'
import Logo from '../../../assets/orc-logo-head.png'
import Slide from '@mui/material/Slide';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu'
import { MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout'
import SimpleAlert from '../../alerts/SimpleAlert'
import { useNavigate } from 'react-router-dom';

const PageHeader = () => {
    const navigate = useNavigate()
    const [dropDown, setDropDown] = useState(false)
    const [alert, setAlert] = useState(false)

    const logout = () => {
        navigate('/')
    }

  return (
    <nav className="bg-white  shadow-md backdrop-filter backdrop-blur-lg sticky z-40 top-0  ">
        <div className=" mx-4 sm:mx-8 ">
            <div className="relative flex items-center justify-between">
                <div className='flex justify-between items-center  py-1.5' >
                    <span className='flex gap-3 items-center w-max grow  '>
                        <img src={Logo} alt="" className=' aspect-square h-10 w-10 cursor-pointer' onClick={_ => navigate('/dashboard')}/>
                        <span className='text-sm hidden sm:block font-semibold text-gray-700'> Office of the Registrar of Companies </span>
                    </span>
                    <button 
                        onClick={_ => navigate('/dashboard')}
                        className='ml-4 py-1 px-3 rounded-[5px] text-white bg-blue-800 hover:bg-blue-900'
                    >
                            Home
                    </button>
                </div>
               <div className="ml-4 flex items-center md:ml-6">
                    <div className='relative '>
                        <div className='flex gap-4'>
                            <div>
                                <button onClick={_ => setDropDown(!dropDown)} type="button" className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 grid justify-center items-center hover:bg-blue-800">
                                        <span className="text-sm">Na</span> 
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
              
                </div>
            </div>
        </div>

        {dropDown &&
            <ClickAwayListener onClickAway={_ => setDropDown(false)}>
                <Slide direction="down" in={dropDown} mountOnEnter unmountOnExit>
                    <div className='relative mr-4 sm:mr-8'>
                        <ul className="absolute right-0  z-[1000]  w-48  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <MenuItem className="px-4 py-2 text-sm flex gap-1.5" ><MenuIcon sx={{fontSize: 18}} /> Option 1</MenuItem>
                            <MenuItem className="px-4 py-2 text-sm flex gap-1.5" > <SettingsIcon sx={{fontSize: 20}}/>  Settings</MenuItem>
                            <MenuItem 
                                onClick={_ => setAlert(true)}
                                className=" px-4 py-2 text-sm flex gap-1.5 " 
                            >
                                <LogoutIcon sx={{fontSize: 20}} className="  text-red-600"/> <span  className="  text-red-600">Sign out</span>
                            </MenuItem>
                        </ul>
                    </div>
                </Slide>
            </ClickAwayListener> 
        }
        
        <SimpleAlert open={alert} logout={true} onNo={_ => setAlert(false)} onYes={logout}/>
    </nav>

  )
}

export default PageHeader
