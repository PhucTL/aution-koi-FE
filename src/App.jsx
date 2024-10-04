import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import About from './pages/About/About.jsx'
import Register from './pages/Register/Register.jsx'
import CurrentAuction from './pages/CurrentAuction/CurrentAuction.jsx'
import PastAuction from './pages/PastAuction/PastAuction.jsx'
import DemoAxios from './components/DemoAxios.jsx';
import Footer from './components/Footer/Footer.jsx';
import UserProfile from './pages/UserProfile/userProfile.jsx';



function App() {
  const CURRENT_USER_ROLE = useSelector((state) => state.auth.profile.currentUser ? state.auth.profile.currentUser.role : "guest")
  // const CURRENT_USER_ROLE = "customer"

  function PublicElement({ children }) {
    return <>{children}</>
  }

  function MemberElement({ children }) {
    if (CURRENT_USER_ROLE === "MEMBER") {
      return <>{children}</>
    } else {
      return <Navigate to={"/login"}/>
    }
  }

  function StaffElement({ children }) {
    if (CURRENT_USER_ROLE === "STAFF") {
      return <>{children}</>
    } else {
      return <Navigate to={"/login"}/>
    }
  }

  function ManagerElement({ children }) {
    if (CURRENT_USER_ROLE === "MANAGER") {
      return <>{children}</>
    } else {
      return <Navigate to={"/login"}/>
    }
  }

  useEffect(() => {
    return (
      console.log(CURRENT_USER_ROLE)
    )
  }, [CURRENT_USER_ROLE])

  return (
    <Router>
      <div className='wrapper'>
        <Header />
        <div className='main'>
          <Routes>
            <Route path="/" element={<PublicElement><Home /></PublicElement>} />
            <Route path="/about" element={<PublicElement><About /></PublicElement>} />
            <Route path="/currentAuction" element={<MemberElement><CurrentAuction /></MemberElement>} />
            <Route path="/pastAuction" element={<PublicElement><PastAuction /></PublicElement>} />
            <Route path="/login" element={<PublicElement><Login /></PublicElement>} />
            <Route path="/register" element={<PublicElement><Register /></PublicElement>} />
            <Route path='/userProfile' element={<MemberElement><UserProfile /></MemberElement>}></Route>
            <Route path='/manager' element={<ManagerElement><Manager /></ManagerElement>} />
            <Route path='*' element={<div>Page Not Found!</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

function Manager() {
  return <div>Manager Page</div>
}

export default App
