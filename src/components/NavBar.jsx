import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { DataContext } from "../App";

const NavBar = () => {
  const { userProfile, setUserProfile } = useContext(DataContext);

  const handleLogout = () => {
    setUserProfile(null);
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md bg-gray-800 text-white">
      
      <div className="flex space-x-6">
        <RouterLink
          to="/"
          className="font-bold text-white hover:text-teal-500 transition-colors duration-300"
        >
          HOME
        </RouterLink>
        <RouterLink
          to="/about"
          className="font-bold text-white hover:text-teal-500 transition-colors duration-300"
        >
          ABOUT
        </RouterLink>
        <RouterLink
          to="/contact"
          className="font-bold text-white hover:text-teal-500 transition-colors duration-300"
        >
          CONTACT
        </RouterLink>
        
        <RouterLink
          to="/projects"
          className="font-bold text-white hover:text-teal-500 transition-colors duration-300"
        >
          PROJECTS
        </RouterLink>
      </div>

      <div className="flex space-x-4">
        {!userProfile ? (
          <>
            <RouterLink
              to="/login"
              className="px-4 py-2 text-lg font-bold rounded bg-teal-500 text-white hover:bg-teal-600 transition duration-300"
            >
              LOGIN
            </RouterLink>
            <RouterLink
              to="/register"
              className="px-4 py-2 text-lg font-bold rounded bg-teal-500 text-white hover:bg-teal-600 transition duration-300"
            >
              REGISTER
            </RouterLink>
          </>
        ) : (
          <>
            <RouterLink
              to="/profile"
              className="px-4 py-2 text-lg font-bold rounded bg-teal-500 text-white hover:bg-teal-600 transition duration-300"
            >
              PROFILE
            </RouterLink>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-lg font-bold rounded bg-red-500 text-white hover:bg-red-600 transition duration-300"
            >
              LOGOUT
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
