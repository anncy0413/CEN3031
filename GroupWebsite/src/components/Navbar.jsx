import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // adjust path if needed

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();            // clear context and localStorage
    navigate('/login');  // redirect to login page after logout
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex items-center gap-4">
      {/* Protected links shown only if logged in */}
      {user && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/workout">Workout</Link>
          <Link to="/progress">Progress</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </>
      )}

      {/* Right-aligned options */}
      <div className="ml-auto flex gap-4">
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <Link to="/profile">Profile</Link>
          // <button
          //   onClick={handleLogout}
          //   className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
          // >
          //   Logout
          // </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


