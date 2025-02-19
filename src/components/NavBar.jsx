import {useState, useContext} from "react";
import {DataContext} from "../App";


const NavBar = () => {
  const [uname, setUName] = useState("");
  const [password, setPassword] = useState("");
  const {logStatus,setLogStatus}=useContext(DataContext);

  const check = () => {
    if (uname.trim() === "user1" && password.trim() === "test") {
      setLogStatus(1);
    }
  };

  const logout = () => {
    setLogStatus(0);
    setUName("");
    setPassword("");
  };

  const loginForm = (
    <div className="space-y-2">
      <div>
        <label className="block">Username:</label>
        <input
          type="text"
          value={uname}
          onChange={(e) => setUName(e.target.value)}
          className="border rounded p-1"
        />
      </div>
      <div>
        <label className="block">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded p-1"
        />
      </div>
      <button
        onClick={check}
        className="bg-blue-50 text-black px-3 py-1 rounded hover:bg-green-600"
      >
        Login
      </button>
    </div>
  );

  const logoutUser = (
    <div className="space-y-2">
      <p>Hello, <strong>user1</strong>!</p>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );

  return (
    <div className="grid grid-cols-6 bg-green-900 text-2xl px-10 py-4">
      <div>
        <a href="/home" className="hover:underline">Home</a>
      </div>
      <div>
        <a href="/books" className="hover:underline">Books</a>
      </div>
      <div>
        <a href="/contactus" className="hover:underline">Contact Us</a>
      </div>
      <div></div>
      <div></div>
      <div>{logStatus ? logoutUser : loginForm}</div>
    </div>
  );
};

export default NavBar;
