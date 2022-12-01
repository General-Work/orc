import React,{ useState} from 'react'
import logo from '../../assets/orc-logo.png'
import LoginPage from './loginPage'
import RegisterPage from './registerPage'
import ActionAlert from '../alerts/actionAlert'



const AppLogin = () => {
    const [login, setLogin] = useState(true)
    const [alert, setAlert] = useState({
        open: false,
        text: '',
        status: ''
    })
  return (
    <div className='w-screen h-screen  grid items-center justify-center bg-gray-200 '>

            <div className='flex flex-col gap-3'>
                <div className='grid justify-center'>
                    <div className='flex flex-col '>
                        <div className="flex justify-center">
                            <img src={logo} alt='Logo' className=''/>
                        </div>
                        {/* <div className=' flex flex-col text-gray-700 text-2xl uppercase font-bold'>
                            <span className=''>Office of the Registrar</span>
                            <span className='grid justify-center '>OF COMPANIES</span>
                        </div> */}
                    </div>
                </div>
                <div className='rounded-md bg-white shadow-sm border  md:w-[440px]  '>
                    {login ? 
                        <LoginPage 
                            setAlert={setAlert}
                            onRegister={_ => setLogin(false)}
                        />
                        :
                        <RegisterPage
                            setAlert={setAlert}
                            setLogin={setLogin}
                        />
                    }

                </div>
            </div>
    

        <ActionAlert open={alert.open} text={alert.text} status={alert.status} 
            close={_ => setAlert({...alert, open: false})}    
        />
    </div>
  )
}

export default AppLogin
