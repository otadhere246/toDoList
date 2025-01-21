import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const DashboardPage = () => {
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('http://localhost:600/api/auth/gettasks');
        const tasks = response.data;

        // Calculate totals dynamically
        const total = tasks.length;
        const completed = tasks.filter((task) => task.completed).length;
        const pending = total - completed;

        // Update state
        setTotalTasks(total);
        setCompletedTasks(completed);
        setPendingTasks(pending);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

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
