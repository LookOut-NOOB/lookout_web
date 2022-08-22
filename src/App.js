import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Pages
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import RecoverPassword from "./Pages/Auth/RecoverPassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Alarms from "./Pages/Alarm/Alarms";
import Ambulance from "./Pages/Ambulance/Ambulance";
import Contacts from "./Pages/Contacts/Contacts";
import Incident from "./Pages/Incident/Incident";

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
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/incident" element={<Incident />} />
      </Routes>
    </Router>
  );
}

export default App;
