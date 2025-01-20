import {Link} from "react-router-dom"
const Navbar = () => (
  <nav className="bg-blue-500 text-white p-4 flex justify-between">
    <div className="text-lg font-bold">Task Manager</div>
    <div>
      <Link to="/dashboard" className="px-4 hover:underline">Dashboard</Link>
      <Link to="/tasks" className="px-4 hover:underline">Tasks</Link>
    </div>
  </nav>
);

export default Navbar