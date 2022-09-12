import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Pages
import Signin from "./Pages/Auth/Signin";
import { SignUp } from "./Pages/Auth/SignUp";
import RecoverPassword from "./Pages/Auth/RecoverPassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Alarms from "./Pages/Alarm/Alarms";
import Ambulance from "./Pages/Ambulance/Ambulance";
import Contacts from "./Pages/Contacts/Contacts";
import Incident from "./Pages/Incident/Incident";
import { AuthContextProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./Pages/Auth/protectedRoute";
import Community from "./Pages/Community//Community";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recover" element={<RecoverPassword />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/alarms"
            element={
              <ProtectedRoute>
                <Alarms />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ambulance"
            element={
              <ProtectedRoute>
                <Ambulance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <ProtectedRoute>
                <Contacts />
              </ProtectedRoute>
            }
          />
          <Route path="/incident" element={<Incident />} />
          <Route
            path="/community"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
