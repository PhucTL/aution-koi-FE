import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import About from "./pages/About/About.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Register from "./pages/Register/Register.jsx";
import CurrentAuction from "./pages/CurrentAuction/CurrentAuction.jsx";
import PastAuction from "./pages/PastAuction/PastAuction.jsx";
import Forbidden403 from "./pages/Forbidden403/Forbidden403.jsx";
import DemoAxios from "./components/DemoAxios.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Member from "./pages/Member/Member.jsx";
import Breeder from "./pages/Breeder/Breeder.jsx";
import Staff from "./pages/Staff/ManageStaff.jsx";
import Request from "./pages/Request/MRequest.jsx";

function App() {
  const CURRENT_USER_ROLE = useSelector((state) =>
    state.auth.profile.currentUser
      ? state.auth.profile.currentUser.role
      : "GUEST"
  );
  // const CURRENT_USER_ROLE = "customer"

  function PublicElement({ children }) {
    return <>{children}</>;
  }

  function MemberElement({ children }) {
    if (CURRENT_USER_ROLE === "MEMBER") {
      return <>{children}</>;
    } else {
      return <Navigate to={"/login"} />;
    }
  }

  function StaffElement({ children }) {
    if (CURRENT_USER_ROLE === "STAFF") {
      return <>{children}</>;
    } else {
      return <Navigate to={"/login"} />;
    }
  }

  function ManagerElement({ children }) {
    if (CURRENT_USER_ROLE === "MANAGER") {
      return <>{children}</>;
    } else {
      return <Navigate to={"/login"} />;
    }
  }

  useEffect(() => {
    console.log(CURRENT_USER_ROLE);
  }, []);

  return (
    <Router>
      <div className="wrapper">
        <Header userRole={CURRENT_USER_ROLE} />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <PublicElement>
                  <Home userRole={CURRENT_USER_ROLE} />
                </PublicElement>
              }
            />
            <Route
              path="/about"
              element={
                <PublicElement>
                  <About />
                </PublicElement>
              }
            />
            <Route
              path="/pastAuction"
              element={
                <PublicElement>
                  <PastAuction />
                </PublicElement>
              }
            />
            <Route
              path="/login"
              element={
                <PublicElement>
                  <Login />
                </PublicElement>
              }
            />
            <Route
              path="/register"
              element={
                <PublicElement>
                  <Register />
                </PublicElement>
              }
            />
            <Route
              path="/profile"
              element={
                <PublicElement>
                  <Profile userRole={CURRENT_USER_ROLE} />
                </PublicElement>
              }
            />
            <Route
              path="/currentAuction"
              element={
                <MemberElement>
                  <CurrentAuction />
                </MemberElement>
              }
            />
            <Route
              path="/manager"
              element={
                <ManagerElement>
                  <Manager />
                </ManagerElement>
              }
            />

            <Route
              path="/member"
              element={
                <ManagerElement>
                  <Member />
                </ManagerElement>
              }
            />

            <Route
              path="/breeder"
              element={
                <ManagerElement>
                  <Breeder />
                </ManagerElement>
              }
            />

            <Route
              path="/staff"
              element={
                <ManagerElement>
                  <Staff />
                </ManagerElement>
              }
            />

            <Route
              path="/request"
              element={
                <ManagerElement>
                  <Request />
                </ManagerElement>
              }
            />

            <Route path="/forbidden403" element={<Forbidden403 />} />
            <Route path="*" element={<div>Page Not Found!</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function Manager() {
  return <div>Manager Page</div>;
}

export default App;
