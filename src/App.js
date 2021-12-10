import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// import Axios from "axios";
import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./Pages/NotFound";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Card/CardDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CardDetails />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<CardDetails />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/:id" element={<CardDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
