import { useState, useContext } from "react";
import { DataContext } from "../App";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const { logStatus, setLogStatus } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !pwd) {
      alert("Please fill in both username and password to continue");
      return;
    }

    if (username && pwd) {
      setLogStatus(true);
    } else {
      alert("Login unsuccessful, please check your credentials");
    }

    if (logStatus) {
      console.log("Logged In");
      return;
    }
  };

  const logIn = (
    <form onSubmit={handleSubmit} className="max-w-sm space-y-4">
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
        <label htmlFor="pwd" className="block text-sm font-semibold">
          Enter your password
        </label>
        <input
          type="password"
          id="pwd"
          className="shadow rounded border border-neutral-300 py-2 px-3 focus:outline-none"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <div className="">
        <button
          className="w-full bg-neutral-500 hover:bg-neutral-700 font-bold rounded py-2 px-3 hover:cursor-pointer transition-colors duration-300"
          type="submit"
        >
          Log In
        </button>
      </div>
    </form>
  );

  const logOut = (
    <h3 className="text-xl font-semibold mb-2">
      Welcome {username}, you are logged in!
    </h3>
  );

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Login Form</h2>
      {logStatus ? logOut : logIn}
    </div>
  );
};

export default Login;
