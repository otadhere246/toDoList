import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [taskData, setTaskData] = useState({ title: '', description: '' });

  useEffect(() => {
    
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:600/api/auth/gettasks');
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setLoading(false);
    }
  };

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const handleCreateOrUpdate = async () => {
    try {
      if (editTask) {
        await axios.put(`http://localhost:600/api/auth/update/${editTask._id}`, taskData);
      } else {
        await axios.post('http://localhost:600/api/auth/newtask', taskData);
      }
      const response = await axios.get('http://localhost:600/api/auth/gettasks');
      setTasks(response.data);
      setShowModal(false);
      setTaskData({ title: '', description: '' });
      setEditTask(null);
    } catch (error) {
      console.error('Error creating/updating task:', error);
    }
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setTaskData({ title: task.title, description: task.description });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:600/api/auth/deletetask/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const handleComplete = async (id) => {
    try {
      await axios.post(`http://localhost:600/api/auth/complete/${id}`,{
        completed:true
      });
      fetchTasks()
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Tasks</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Create Task
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="filter" className="mr-2">Filter:</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => handleFilter(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        {loading ? (
          <p>Loading tasks...</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filteredTasks.map((task) => (
              <div key={task._id} className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-lg font-bold mb-1">{task.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-sm font-semibold ${task.completed ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {task.completed ? 'Completed' : 'Pending'}
                  </span>
                  <div>
                    <button
                      onClick={() => handleEdit(task)}
                      // className="text-blue-500 hover:underline mr-2"
                      className="bg-blue-500 text-white px-3 py-1 ml-4 rounded-lg hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      // className="text-red-500 hover:underline"
                      className="bg-red-500 text-white px-3 py-1 ml-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleComplete(task._id)}
                      // className="text-green-500 hover:underline"
                      className="bg-green-500 text-white px-3 py-1 ml-2 rounded-lg hover:bg-green-600"
                    >
                      Complete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">{editTask ? 'Edit Task' : 'Create Task'}</h2>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-2 font-medium">Title</label>
                <input
                  id="title"
                  type="text"
                  value={taskData.title}
                  onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
                  className="w-full border px-3 py-2 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block mb-2 font-medium">Description</label>
                <textarea
                  id="description"
                  value={taskData.description}
                  onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
                  className="w-full border px-3 py-2 rounded-lg"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setEditTask(null);
                    setTaskData({ title: '', description: '' });
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateOrUpdate}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  {editTask ? 'Update' : 'Create'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksPage