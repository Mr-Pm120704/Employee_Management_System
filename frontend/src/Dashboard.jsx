import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useLocation, useNavigate } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    
    const nameFromState = location.state?.username;
    const nameFromStorage = localStorage.getItem('username');
    setUsername(nameFromState || nameFromStorage || "Guest");
  }, [location.state]);

  const EmployeeList = () => {
    navigate('/EmployeeList');
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    localStorage.removeItem('username'); 
    navigate('/LoginPage');
  };

  return (
    <div>
      <Header username={username} />
      <div className="welcomeStyle">
        <h2>Welcome to the Admin Panel, {username}!</h2>
      </div>
      
    </div>
  );
}

export default Dashboard;
