import { useState, useContext } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api"; // Adjust the import path as necessary

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setLogStatus, setUserProfile } = useContext(DataContext);
  const { setUser } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    if (!username.trim() || !password.trim()) {
      setError("Please fill in both fields.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await loginUser({ 
        username: username.trim(), 
        password: password.trim() 
      });
  
      // Success: Update state and redirect
      setUser(response.data.user);
      setUserProfile(response.data.user);
      setLogStatus(true);
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("userProfile", JSON.stringify(response.data.user));
      localStorage.setItem("isLoggedIn", "true");
      
      navigate("/profile");
    } catch (error) {
      // Unified error handling (like your registration example)
      console.error("Login error:", error);
      if (error.response) {
        setError(error.response.data.error || "Invalid credentials");
      } else if (error.request) {
        setError("No server response. Check your connection.");
      } else {
        setError("Login failed: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-500">Login Form</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleLogIn} className="max-w-sm space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-semibold mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full shadow rounded border border-neutral-300 py-2 px-3 focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full shadow rounded border border-neutral-300 py-2 px-3 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button 
          className="w-full bg-teal-500 text-white py-3 rounded-lg font-bold hover:bg-teal-400 transition duration-300" 
          type="submit"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  );
};

export default Login;