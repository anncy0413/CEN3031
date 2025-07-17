import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LogoutPage() {
  const [weightData, setWeightData] = useState([]);
  const [cardioData, setCardioData] = useState([]);

  useEffect(() => {
    localStorage.setItem('token', "");
    localStorage.setItem('userId', "");
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 py-8 space-y-12">
      <h1 className="text-3xl font-semibold">Logged out</h1>
    </div>
  );
}

export default LogoutPage;
