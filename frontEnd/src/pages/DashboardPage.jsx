import Navbar from "../components/Navbar";

const DashboardPage = () => {
  const totalTasks = 50;
  const completedTasks = 30;
  const pendingTasks = 20;

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Tasks Card */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Total Tasks</h2>
            <p className="text-4xl font-bold text-blue-500">{totalTasks}</p>
          </div>

          {/* Completed Tasks Card */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Completed Tasks</h2>
            <p className="text-4xl font-bold text-green-500">{completedTasks}</p>
          </div>

          {/* Pending Tasks Card */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Pending Tasks</h2>
            <p className="text-4xl font-bold text-red-500">{pendingTasks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;