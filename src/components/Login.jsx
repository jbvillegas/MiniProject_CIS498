import { useState, useContext } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const { logStatus, setLogStatus, setUserProfile } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();

    if (!username.trim() || !pwd.trim()) {
      alert("Please fill in both the username and password fields.");
      return;
    }
    
    const storedUserProfile = JSON.parse(localStorage.getItem("userProfile"));

    if (
      storedUserProfile &&
      storedUserProfile.username === username.trim() &&
      storedUserProfile.password === pwd.trim()
    ) {
      setUserProfile(storedUserProfile); 
      setLogStatus(true);
      alert("Login successful!");
      navigate("/profile");
    } else {
      alert("Login unsuccessful, please check your credentials.");
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-500">Login Form</h2>
      {!logStatus ? (
        <form onSubmit={handleLogIn} className="max-w-sm space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold mb-1">
              Enter your username
            </label>
            <input
              type="text"
              id="username"
              className="shadow rounded border border-neutral-300 py-2 px-3 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pwd" className="block text-sm font-semibold">Enter your password</label>
            <input
              type="password"
              id="pwd"
              className="shadow rounded border border-neutral-300 py-2 px-3 focus:outline-none"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-bold hover:bg-teal-400 transition duration-300" type="submit">
            Log In
          </button>
        </form>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Hello, you are logged in!
          </h3>
          <button
            className="w-full bg-teal-500 text-white py-3 rounded-lg font-bold hover:bg-teal-400 transition duration-300"
            onClick={() => setLogStatus(false)}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
