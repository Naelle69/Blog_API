import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProfilPage from './pages/ProfilPage.jsx';
import LoginPage from './pages/LoginPage.jsx';



function App() {
  return (
    <Router>
        <div className="">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profil/:id" element={<ProfilPage />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;