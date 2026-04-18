import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// ✅ ALL IMPORTS HERE ONLY (TOP)
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import HospitalPage from "./pages/HospitalPage";
import BookingPage from "./pages/BookingPage";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import AuthPage from "./pages/AuthPage";
// import AuthPage from "./pages/AuthPage"; // only if file exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AuthPage />} />
    
      </Routes>
    </Router>
  );
}

export default App;