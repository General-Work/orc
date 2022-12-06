import React, {useState, createContext} from 'react'
import PageHeader from '../../components/layout/dashbord/pageHeader'
import {Outlet} from 'react-router-dom'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';
import SideModal from '../../components/layout/sideModal'
import ChatPage from '../../components/chatPage/index'
import ActionAlert from '../../components/alerts/actionAlert';

export const AlertContext = createContext()

const Layout = () => {
  const [showChat, setShowChat] = useState(false)
  const [alert, setAlert] = useState({
    open: false,
    status: '',
    text: ''
})
  
  const getChatView = () => {
    setShowChat(true)
  }
  return (
    <div className='bg-gray-200 w-screen h-max  '>
      <div className='flex flex-col'>
        <PageHeader/>

        <div className='h-full'>
          <AlertContext.Provider value={setAlert}>
              <ActionAlert open={alert.open} text={alert.text} close={_=>setAlert({...alert, open:false})}  status={alert.status}/>
              <Outlet/>
            </AlertContext.Provider>
        </div>
      </div>

        <div className='fixed right-3 bottom-3 z-30'>
          <div className='relative'>
            <IconButton onClick={getChatView}>
              <div className='rounded-full bg-green-800 text-white shadow-md z-[1000px]  text-sm font-semibold leading-5  p-3'>
                <QuestionAnswerIcon sx={{fontSize: 29}}/>
              </div>

            </IconButton>
          </div>
        </div>

          {showChat && 
            <SideModal showClose onClick={_ => setShowChat(false)}>
              {/* <div className='flex flex-grow'> */}
                <ChatPage/>
              {/* </div> */}
            </SideModal>
          }
    </div>
  )
}

export default Layout