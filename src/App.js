import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Pages
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/Auth/SignUp";
import RecoverPassword from "./Pages/Auth/RecoverPassword";
import Alarms from "./Pages/Alarms";
import Ambulance from "./Pages/Ambulance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recover" element={<RecoverPassword />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alarms" element={<Alarms />} />
        <Route path="/ambulance" element={<Ambulance />} />
      </Routes>
    </Router>
  );
}

export default App;
