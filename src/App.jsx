import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { createContext, useState } from "react";

export const DataContext = createContext("");

function App() {
  const [logStatus, setLogStatus] = useState(0);
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-neutral-700  via-neutral-800 to-neutral-900 text-white">
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
    </div>
  );
}

export default App;
