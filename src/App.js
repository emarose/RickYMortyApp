import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// import Axios from "axios";
import React, { useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./Pages/NotFound";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import Login from './Pages/Login';
import Register from "./Pages/Register";
import CreateCharacter from "./Pages/CreateCharacter";
import CardDetails from "./components/Card/CardDetails";
import Aos from 'aos';
import "aos/dist/aos.css"


function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: 'ease', once: true });
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container-fluid appContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/:id" element={<CardDetails />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<CardDetails />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/:id" element={<CardDetails />} />
          <Route path="/CreateCharacter" element={<CreateCharacter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
