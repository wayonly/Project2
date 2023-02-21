import Navbar from "./Navbar"
import Service from "./components/Service"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Reservation from "./pages/Reservation/Reservation"
import Location from "./pages/Location"
import { useEffect, useState } from "react";
import {auth} from "./firebase";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup  />} />
          <Route path="/signin" element={<Signin  />} />
          <Route path="/service" element={<Service />} />
          <Route path="/reservation" element={<Reservation/>}/>
          <Route path="/location" element={<Location/>}/>
          
        </Routes>
      </div>
    </>
  )
}

export default App
