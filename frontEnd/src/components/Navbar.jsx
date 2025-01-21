// import {Link} from "react-router-dom"
// const Navbar = () => (
//   <nav className="bg-blue-500 text-white p-4 flex justify-between">
//     <div className="text-lg font-bold">Task Manager</div>
//     <div>
//       <Link to="/dashboard" className="px-4 hover:underline">Dashboard</Link>
//       <Link to="/tasks" className="px-4 hover:underline">Tasks</Link>
//     </div>
//   </nav>
// );

// export default Navbar

import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-500 text-white py-4 px-6 mb-10 flex justify-between items-center">
    <div className="flex items-center">
      <img src="https://play-lh.googleusercontent.com/VPqK75BwKMtTDFF6UQS6E3GYdYqzvZfddDxoKRH-DSlXIcYLN_EeSy5OXKx0bhBTtLUU" alt="Task Manager Logo"  className="h-10 w-10 mr-2 rounded-full" />
      <div className="text-lg font-bold">Task Manager</div>
    </div>
    <div>
      <Link to="/dashboard" className="px-4 bg-blue-600 hover:bg-blue-800 transition duration-200 px-2 py-2 rounded-lg ">Dashboard</Link>
      <Link to="/tasks" className="px-4 bg-blue-600 hover:bg-blue-800 transition duration-200 px-5 py-2 rounded-lg ml-3">Tasks</Link>
    </div>
  </nav>
);

export default Navbar;
