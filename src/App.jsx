import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const DataContext = React.createContext();

import Register from "./components/Register";
import Login from "./components/Login";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const [logStatus, setLogStatus] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  return (
    <DataContext.Provider value={{user, setUser, logStatus, setLogStatus, userProfile, setUserProfile }}>
      <Router>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </DataContext.Provider>
  );
}
export default App;
