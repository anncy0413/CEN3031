import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

useEffect(() => {
    fetch('http://localhost:5050/users/leaderboard')
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        setLeaders(data);
      })
      .catch(err => console.error(err));
}, []);


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Leaderboard</h2>
        <ul className="divide-y">
          {leaders.length === 0 ? (
            <li className="py-2 text-center text-gray-500">No data available</li>
          ) : (
            leaders.map((user, index) => (
              <li key={user._id} className="py-2 flex justify-between font-medium">
                <span>{index + 1}. {user.username}</span>
                <span>{user.points} pts</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Leaderboard;
