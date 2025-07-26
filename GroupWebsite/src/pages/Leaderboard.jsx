import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

function Leaderboard() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);


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


  const resetPoints = async (userId) => {
    try {
      await axios.patch(`http://localhost:5050/users/reset/${userId}`, {}, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });


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


  const getMedal = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return `#${index + 1}`;
  };


  const top5 = users.slice(0, 5);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">🏆 Top 10 Users</h2>

      <div className="h-72 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={top5} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="username" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="points" fill="#3182CE" />
          </BarChart>
        </ResponsiveContainer>
      </div>

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



