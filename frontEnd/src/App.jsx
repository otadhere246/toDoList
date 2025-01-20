import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage'
import DashboardPage from './pages/DashboardPage'
import TasksPage from './pages/TaskPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LoginPage/>} />
        <Route path="/signup" element={ <SignUpPage/>} />
        <Route path="/dashboard" element={ <DashboardPage/>} />
        <Route path="/tasks" element={ <TasksPage/>} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
    
  )
}

export default App
