import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-4">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/workout">Workout</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/challenges">Challenges</Link>
      <Link to="/progress">Progress</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}
export default Navbar;
