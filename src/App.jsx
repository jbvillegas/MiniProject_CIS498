import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import { createContext, useState } from "react";

export const DataContext = createContext("");

function App() {
  const [logStatus, setLogStatus] = useState(0);
  return (
    <DataContext.Provider value={{ logStatus, setLogStatus }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
