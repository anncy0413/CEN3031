import React from 'react';

function Leaderboard() {
  const dummyData = [
   
  ];

  return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Leaderboard</h2>
        <ul className="divide-y">
          {dummyData.map((user, index) => (
            <li key={index} className="py-2 flex justify-between font-medium">
              <span>{index + 1}. {user.name}</span>
              <span>{user.points} pts</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Leaderboard;
