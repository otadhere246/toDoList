import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Both fields are required');
      return;
    }

    setError('');

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('http://localhost:600/api/auth/login', {
        username,
        password,
      });

      console.log("response ",response)

      // Store the response data in local storage
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard')
      // alert('Login successful!');
    } catch (error) {
      console.error('Error:', error);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          <Link to="/signup">Don't have account ? signup</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;


