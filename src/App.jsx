import { Routes, Route } from "react-router-dom"
import AppLogin from "./components/layout/appLogin"
import {createContext, useState} from 'react'
import Loader from './components/layout/Loader'
import LandingPage from "./pages/landingPage/landingPage"
import Home from './pages/landingPage/Home'
import Services from "./pages/landingPage/Services"
import Dashboard from "./pages/clients/dashboard"
import Contact from './pages/landingPage/Contact'
import PageNotFound from "./pages/pageNotFound"
import Forms from './pages/Forms/index'
import RegisterAcompanyWithShares from './pages/Forms/Register_a_company_with_shares/Index'

export const LoadingContext = createContext()

function App() {
  const [loading, setLoading] = useState(false)


  return (
    <LoadingContext.Provider value={setLoading}>
      {loading && 
        <Loader/>
      }

      <Routes >
        <Route  element={<LandingPage/>}>
          <Route index path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
       </Route>
        <Route path="/auth"  element={<AppLogin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<PageNotFound/>} />
        <Route element={<Forms/>}>
        <Route  path="/forms/registeracompanywithshares" element={<RegisterAcompanyWithShares/>}/>
        </Route>
      </Routes>
        
    </LoadingContext.Provider>
  )
}

export default App
