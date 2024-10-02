import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import About from './pages/About/About.jsx'
import Register from './pages/Register/Register.jsx'
import CurrentAuction from './pages/CurrentAuction/CurrentAuction.jsx'
import PastAuction from './pages/PastAuction/PastAuction.jsx'
import DemoAxios from './components/DemoAxios.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {

  return (
    <Router>
      <div className='wrapper'>
        <Header />
        <div className='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/currentAuction" element={<CurrentAuction />} />
            <Route path="/pastAuction" element={<PastAuction />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
