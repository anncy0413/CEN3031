import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

function Leaderboard() {
  const { user } = useAuth();
  console.log(user)
  const [users, setUsers] = useState([]);

  // Fetch top 10 users
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get('http://localhost:5050/users/leaderboard');
        setUsers(res.data);
      } catch (err) {
        console.error('Failed to fetch leaderboard:', err);
      }
    };
    fetchLeaderboard();
  }, []);

  // Admin-only: reset a user's points
  const resetPoints = async (userId) => {
    try {
      await axios.patch(`http://localhost:5050/users/reset/${userId}`, {}, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });

      // Update points locally
      setUsers((prev) =>
        prev.map((u) =>
          u._id === userId ? { ...u, points: 0 } : u
        )
      );
    } catch (err) {
      console.error('Failed to reset user points:', err);
      alert('Reset failed. Only admins can perform this action.');
    }
  };

  // Return medal emoji for top 3 ranks
  const getMedal = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return `#${index + 1}`;
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">🏆 Top 10 Users</h2>
      <ul className="space-y-3">
        {users.map((u, index) => (
          <li
            key={u._id}
            className="flex justify-between items-center bg-white shadow-md rounded-lg px-6 py-3"
          >
            <span className="text-lg font-medium">
              {getMedal(index)} {u.username}: {u.points} pts
            </span>
            {user?.role === 'admin' && (
              <button
                onClick={() => resetPoints(u._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition"
              >
                Reset
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;



