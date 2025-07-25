import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function LoginPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', username: '', code: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isAdmin) {
       const adminCode = form.code.trim();

  if (adminCode === 'CEN3031') {
    const adminData = {
      username: 'admin',
      role: 'admin',
      token: 'admin-token', // ✅ fake token used in backend
    };

    login(adminData); // ✅ Save to context
    localStorage.setItem('token', 'admin-token'); // ✅ Store it for axios
    setMessage('✅ Admin login successful!');
    navigate('/leaderboard');
  ``} 
  else {
    setMessage('❌ Invalid admin code.');
  ``}
    } 
      else {
      try {
        const res = await fetch('http://localhost:5050/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();

        if (res.ok) {
            const userData = {
            email: data.email,
            username: data.username,
            userId: data.userId,
            token: data.token
            };

            login(userData); // ✅ Save to AuthContext + localStorage
            setMessage('✅ User login successful!');
            setEmail('');
            setPassword('');
            navigate('/dashboard'); // ✅ Navigate to protected page
        } else {
          if (data.error === "User doesn't exist") {
            setMessage('❌ User does not exist.');
          } else if (data.error === "Password doesn't match") {
            setMessage('❌ Incorrect password.');
          } else {
            setMessage('❌ Login failed.');
          }
        }
      } catch (err) {
        setMessage('❌ Network error during login.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          {isAdmin ? "Admin Login" : "User Login"}
        </h2>
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
             <input
              type="text"
               name="code"
               placeholder="Admin Code"
               value={form.code}
               onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
  />
          ) : (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold shadow"
          >
            {isAdmin ? "Login as Admin" : "Login as User"}
          </button>
          {message && <p className="text-center text-sm mt-2">{message}</p>}
          <p className="text-center text-sm mt-4 text-gray-600">
            Need to sign up?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">Register here.</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
