import React from 'react'

const AdminDashboard = () => {
    const handleLogout = () =>{
        console.log("Logged out");
    }
  
  return (
    <div>
    AdminDashboard
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard