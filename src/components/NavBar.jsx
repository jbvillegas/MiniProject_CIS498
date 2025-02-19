import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-neutral-800 text-white shadow-md">
      <div className="flex space-x-8">
        <Link to="/home" className="font-bold">Home</Link>
        <Link to="/x" className="font-bold">Some Page</Link>
        <Link to="/y" className="font-bold">Some Page</Link>
        <Link to="/z" className="font-bold">Some Page</Link>
      </div>
      <div className="space-x-4">
        <Link to="/login" className="px-3 py-2 text-xl font-bold rounded bg-linear-to-r from-fuchsia-500  to-rose-500">Login</Link>
        <Link to="/register" className="px-3 py-2 ml-2 text-xl font-bold rounded bg-gradient-to-r from-fuchsia-500 to-rose-500">Register</Link>
      </div>
      
    </div>
  );
};

export default NavBar;