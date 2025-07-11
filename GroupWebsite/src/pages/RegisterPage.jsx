import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== form.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

//==================================================================

    try{
    let result = await fetch(
      'http://localhost:5000/register',{ //http://localhost:5000/api/auth/register
        method: "post",
        body: JSON.stringify({username, email, password}),
        headers: {
          'Content-Type':'application/json'
        }
      }
    )

    result = await result.json();
    console.warn(result);
    if(result){
      if(result.message != "Something went wrong?"){
        alert("Data saved successfully");
        setEmail("");
        setUsername("");
        setPassword("");
        setMessage('Registration Successful');
      }
      else{
        setMessage('Duplicate email and/or username');
      }
    }
    else{
      setMessage('Registration failed');
    }} catch (err) {
      setMessage('Registration failed :(')
    }
  
    //===================================================

  };

  return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="username"
            placeholder="Username"
            // value={form.username}
            // onChange={handleChange}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            name="email"
            placeholder="Email"
            // value={form.email}
            // onChange={handleChange}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            name="password"
            placeholder="Password"
            // value={form.password}
            // onChange={handleChange}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-600 transition font-semibold shadow"
          >
            Register
          </button>
          {message && (
            <p className="text-center text-sm mt-2">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
