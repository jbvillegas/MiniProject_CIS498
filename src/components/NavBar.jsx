import { Link as RouterLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataContext } from '../App';

const NavBar = () => {
  const { userProfile, setUserProfile } = useContext(DataContext);
  const [isProfilePage, setIsProfilePage] = useState(false);

  const handleLogout = () => {
    setUserProfile(null);
  };

  const handleProfileClick = () => {
    setIsProfilePage(true);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md text-black-50">
      <div className="flex space-x-4">
        {!isProfilePage && (
          <>
            <RouterLink
              to="/"
              onClick={() => handleScroll("home")}
              className="font-bold text-black-50 hover:text-teal-500 transition-colors duration-300 cursor-pointer"
            >
              HOME
            </RouterLink>

            <RouterLink
              to="/"
              onClick={() => handleScroll("projects")}
              className="font-bold text-black-50 hover:text-teal-500 transition-colors duration-300 cursor-pointer"
            >
              PROJECTS
            </RouterLink>

            <RouterLink
              to="/"
              onClick={() => handleScroll("about")}
              className="font-bold text-black-50 hover:text-teal-500 transition-colors duration-300 cursor-pointer"
            >
              ABOUT ME
            </RouterLink>

            <RouterLink
              to="/"
              onClick={() => handleScroll("contact")}
              className="font-bold text-black-50 hover:text-teal-500 transition-colors duration-300 cursor-pointer"
            >
              CONTACT
            </RouterLink>
          </>
        )}

        {!isProfilePage ? (
          <RouterLink
            to="/profile"
            onClick={handleProfileClick}
            className="font-bold text-black-50 hover:text-teal-500 transition-colors duration-300"
          >
            PROFILE
          </RouterLink>
        ) : (
          <RouterLink
            to="/"
            onClick={() => {
              handleScroll("home");
              setIsProfilePage(false);
            }}
            className="font-bold text-black-50 hover:text-teal-500 transition-colors duration-300"
          >
            BACK TO HOME
          </RouterLink>
        )}
      </div>

      <div className="space-x-4">
        {!userProfile ? (
          <>
            <RouterLink
              to="/login"
              className="px-2 py-2 text-xl ml-0 font-bold rounded bg-black-500 text-black-50 hover:bg-teal-500 transition duration-300"
            >
              LOGIN
            </RouterLink>
            <RouterLink
              to="/register"
              className="px-2 py-2 ml-0 text-xl font-bold rounded text-black-50 hover:bg-teal-500 transition duration-300"
            >
              REGISTER
            </RouterLink>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-2 py-2 text-xl ml-0 font-bold rounded bg-black-500 text-black-50 hover:bg-teal-500 transition duration-300"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
