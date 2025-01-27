import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-500 text-white py-4 px-6 mb-10 flex justify-between items-center shadow-lg sticky top-0 z-50">
    <div className="flex items-center">
      <img src="https://play-lh.googleusercontent.com/VPqK75BwKMtTDFF6UQS6E3GYdYqzvZfddDxoKRH-DSlXIcYLN_EeSy5OXKx0bhBTtLUU" alt="Task Manager Logo"  className="h-10 w-10 mr-2 rounded-full" />
      <div className="text-lg font-bold ml-2">Task Manager</div>
    </div>
    <div>
      <Link to="/dashboard" className="bg-blue-600 hover:bg-blue-900 transition duration-200 px-2 py-2 rounded-lg text-xl">Dashboard</Link>
      <Link to="/tasks" className="px-4 bg-blue-600 hover:bg-blue-900 transition duration-200 py-2 rounded-lg ml-3 text-xl">Tasks</Link>
    </div>
  </nav>
);

export default Navbar;
