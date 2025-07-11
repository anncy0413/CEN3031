import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function LoginPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
    code: ''
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isAdmin) {
        const res = await axios.post('http://localhost:5000/api/auth/admin-login', {
          username: form.username,
          code: form.code,
          password: form.password,
        });
        setMessage('✅ Admin login successful!');
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');

        //normal login
      } else {
        try{let result = await fetch(
          'http://localhost:5000/login',{
          method: "post",
          body: JSON.stringify({email, password}),
          headers: {
            'Content-Type':'application/json'
          }
        }
      )
      result = await result.json();
      console.warn(result);
      if(result){
        if(result.error == "User doesn't exist"){
          setMessage('User doesn\'t exist.');
        }
        else if(result.error == "Password doesn't match"){
          setMessage('Incorrect password')
        }
        else{
          alert("Logged in successfully");
          setEmail("");
          setPassword("");
          setMessage('Logged in');
        }
        
      }
      else{
        setMessage('Not logged in');
    }} catch (err) {
      setMessage('Login failed')
    }}
    } catch (err) {
      setMessage(`❌ ${err.response?.data?.message || 'Login failed'}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          {isAdmin ? "Admin Login" : "User Login"}
        </h2>

        {/* Toggle User/Admin */}
        <div className="flex justify-center mb-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-l-lg ${!isAdmin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setIsAdmin(false)}
          >
            User
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-r-lg ${isAdmin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setIsAdmin(true)}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {isAdmin ? (
            <>
              <input
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name="username"
                placeholder="Admin Username"
                value={form.username}
                onChange={handleChange}
                required
              />
              <input
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name="code"
                placeholder="Admin Code"
                value={form.code}
                onChange={handleChange}
                required
              />
              <input
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </>
          ) : (
            <>
              <input
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="email"
                name="email"
                placeholder="Email"
                // value={form.email}
                // onChange={handleChange}
                value = {email}
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
            </>
          )}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-600 transition font-semibold shadow"
          >
            {isAdmin ? "Login as Admin" : "Login as User"}
          </button>
          {message && (
            <p className="text-center text-sm mt-2">{message}</p>
          )}
          <p className="text-center text-sm mt-4 text-gray-600">
            Need to sign up?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
