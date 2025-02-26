import { useState, useContext } from "react";
import { DataContext } from "../App"; 
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { logStatus, setLogStatus, setUserProfile } = useContext(DataContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFirstNameInvalid = /\d/.test(firstName);
  const isLastNameInvalid = /\d/.test(lastName);
  const isIdInvalid = isNaN(id);
  const isEmailInvalid =
    !email.includes("@") ||
    !email.includes(".") ||
    email.indexOf("@") > email.indexOf(".");
  const isZipCodeInvalid = isNaN(zipCode);
  const isUsernameInvalid = username.includes(" ");
  const isUserNameFirstCharInvalid = /[^a-zA-Z]/.test(username.charAt(0));
  const isPasswordLengthInvalid = password.length < 10;
  const isPasswordContentInvalid =
    !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (isFirstNameInvalid) {
      alert("First Name must not contain numbers.");
      return;
    }

    if (isLastNameInvalid) {
      alert("Last Name must not contain numbers.");
      return;
    }

    if (isIdInvalid) {
      alert("ID must be numeric only.");
      return;
    }

    if (isEmailInvalid) {
      alert("Email must contain both @ and . symbols, with @ appearing before .");
      return;
    }

    if (isZipCodeInvalid) {
      alert("Zip Code must be numeric only.");
      return;
    }

    if (isUsernameInvalid) {
      alert("Username must not contain spaces.");
      return;
    }

    if (isUserNameFirstCharInvalid) {
      alert("Username must not start with a number or special character.");
      return;
    }

    if (isPasswordLengthInvalid) {
      alert("Password must be at least 10 characters long.");
      return;
    }

    if (isPasswordContentInvalid) {
      alert("Password must contain at least one uppercase, one lowercase letter, and one digit.");
      return;
    }

    const formData = {
      firstName,
      lastName,
      id,
      email,
      city,
      zipCode,
      username,
      password: "Not shown for security",
    };

    setUserProfile(formData);
    setLogStatus(true); 

    alert(`Registration successful \nCollected data:\n${JSON.stringify(formData)}`);

    setFirstName("");
    setLastName("");
    setId("");
    setEmail("");
    setCity("");
    setZipCode("");
    setUsername("");
    setPassword("");

    navigate("/login");
  };

  const logOut = (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-black-50">
        Hello {username}, you are logged in!
      </h3>
      <button
        className="w-full bg-black-500 hover:bg-black-400 font-bold rounded py-2 px-3 hover:cursor-pointer transition-colors duration-300 text-black-50"
        onClick={() => setLogStatus(false)}
      >
        Log Out
      </button>
    </div>
  );

  return (
    <div className="p-4 flex flex-col items-center bg-black-900 text-black-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-500">Registration Form</h2>
      {logStatus ? (
        logOut
      ) : (
        <form onSubmit={handleSubmit} className="max-w-sm items-center space-y-4">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-semibold mb-1 text-black-50">
              Enter your first name
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow rounded border border-black-300 py-2 px-3 focus:outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-semibold mb-1 text-black-50">
              Enter your last name
            </label>
            <input
              type="text"
              id="lastName"
              className="shadow rounded border border-black-300 py-2 px-3 focus:outline-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="id" className="block text-sm font-semibold mb-1 text-black-50">
              Enter your ID
            </label>
            <input
              type="text"
              id="id"
              className="shadow rounded border border-black-300 py-2 px-3 focus:outline-none"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1 text-black-50">
              Enter your email
            </label>
            <input
              type="text"
              id="email"
              className="shadow rounded border border-black-300 py-2 px-3 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-semibold mb-1 text-black-50">
              Enter your city
            </label>
            <input
              type="text"
              id="city"
              className="shadow rounded border border-black-300 py-2 px-3 focus:outline-none"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="zipCode" className="block text-sm font-semibold mb-1 text-black-50">
              Enter your zip code
            </label>
            <input
              type="text"
              id="zipCode"
              className="shadow rounded border border-black-300 py-2 px-3 focus:outline-none"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold mb-1 text-black-50">
              Enter your username
            </label>
            <input
              type="text"
              id="username"
              className="shadow rounded border border-black-300 py-2 px-3 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-1 text-black-50">
              Enter your password
            </label>
            <input
              type="password"
              id="password"
              className="shadow rounded border border-black-300 py-2 px-3 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              className="w-full bg-teal-500 text-white py-3 rounded-lg font-bold hover:bg-teal-400 transition duration-300"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
