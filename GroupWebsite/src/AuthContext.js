import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ New loading state

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    const storedEmail = localStorage.getItem('email');
    const storedUsername = localStorage.getItem('username');
    const storedRole = localStorage.getItem('role');

    if (storedRole === 'admin') {
      setUser({ role: 'admin' });
    } else if (storedToken && storedUserId) {
      setUser({
        token: storedToken,
        userId: storedUserId,
        email: storedEmail,
        username: storedUsername,
      });
    }

    setLoading(false); // ✅ Done restoring user
  }, []);

  const login = (userData) => {
    setUser(userData);

    if (userData.role === 'admin') {
      localStorage.setItem('token', 'admin-token');
      localStorage.setItem('role', 'admin');
    } else {
      localStorage.setItem('token', userData.token);
      localStorage.setItem('userId', userData.userId);
      localStorage.setItem('email', userData.email);
      localStorage.setItem('username', userData.username);
      localStorage.removeItem('role');
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
