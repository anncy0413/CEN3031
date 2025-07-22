import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // adjust path if needed
import { Link, useNavigate } from 'react-router-dom';

function ProfilePage() {

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  //logging out
  const handleSubmitLogout = async (e) => {
      logout();            // clear context and localStorage
      navigate('/login');  // redirect to login page after logout
  }

  //deleting account
  const handleSubmitDelete = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      
    try{
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5050/profile/', {
        method: "DELETE",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
          username: userId,
        })
      });

      const d = await response.json();
      if (response.ok){
        alert("Successfully deleted account");
        // localStorage.setItem('token', "");
        // localStorage.setItem('userId', "");
        // navigate('/login'); //uncomment these 3 lines once it works
      }
      else{
        alert("Could not delete account");
      }
    }
    catch (error){
      console.error(error);
      alert("Deletion error");
    }
      
  }



  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 py-8 space-y-12">
      <form onSubmit={handleSubmitLogout} className="flex flex-col gap-4">
      <button
            type="submit"
            
            className="bg-gradient-to-r from-blue-500 to-blue-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-600 transition font-semibold shadow"
          >
            Log out
          </button>
        </form>
        <form onSubmit={handleSubmitDelete} className="flex flex-col gap-4">
      <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-600 transition font-semibold shadow"
          >
            Delete account
          </button>
          </form>
    </div>
  );
}

export default ProfilePage;
