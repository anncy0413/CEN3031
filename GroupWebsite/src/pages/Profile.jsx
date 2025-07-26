import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    createdAt: '',
    currentWeight: '',
    goalWeight: '',
    trainingGoal: '',
    calorieTarget: '',
  });
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  // Fetch profile data
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await axios.get(`http://localhost:5050/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProfileData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        setLoading(false);
      }
    }
    fetchProfile();
  }, [userId, token]);

  // Update profile fields
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5050/users/${userId}`, profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      alert("Profile updated successfully.");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed.");
    }
  };

  // Logout
  const handleSubmitLogout = async (e) => {
    logout();
    navigate('/login');
  };

  // Delete Account
    const handleSubmitDelete = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch('http://localhost:5050/users/me', {
          method: "DELETE",
          headers: {
            "Authorization": "Bearer " + token
          }
        });

        if (res.ok) {
          alert("Successfully deleted account");
          logout();
          navigate('/login');
        } else {
          alert("Could not delete account");
        }
      } catch (error) {
        console.error(error);
        alert("Deletion error");
      }
    };


  if (loading) return <div className="text-center mt-10 text-gray-600">Loading profile...</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Profile</h2>

      <form onSubmit={handleUpdate} className="space-y-6 bg-white p-6 shadow rounded-lg">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Username</label>
          <input type="text" value={profileData.username} disabled className="w-full p-2 border rounded bg-gray-100" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input type="text" value={profileData.email} disabled className="w-full p-2 border rounded bg-gray-100" />

        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Current Weight (kg)</label>
            <input type="number" name="currentWeight" value={profileData.currentWeight || ''} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Goal Weight (kg)</label>
            <input type="number" name="goalWeight" value={profileData.goalWeight || ''} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Training Goal</label>
          <select name="trainingGoal" value={profileData.trainingGoal || ''} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select goal</option>
            <option value="Gain Muscle">Gain Muscle</option>
            <option value="Lose Fat">Lose Fat</option>
            <option value="Maintain">Maintain</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Calorie Target</label>
          <input type="number" name="calorieTarget" value={profileData.calorieTarget || ''} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        <div className="flex justify-between items-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Save Changes
          </button>
          <Link to="/tool" className="text-blue-600 underline">Go to Calorie Calculator</Link>
        </div>
      </form>

      <div className="flex flex-col sm:flex-row justify-between mt-10 gap-4">
        <form onSubmit={handleSubmitLogout} className="w-full sm:w-auto">
          <button type="submit" className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">
            Log out
          </button>
        </form>
        <form onSubmit={handleSubmitDelete} className="w-full sm:w-auto">
          <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
            Delete Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
