import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("refreshToken", token);
    setLoggedIn(true);

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setLoggedIn(false);

    axios.defaults.headers.common["Authorization"] = null;
  };

  const value = {
    loggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const accessToken = sessionStorage.getItem('accessToken');
//     const refreshToken = sessionStorage.getItem('refreshToken');
//     if (accessToken && refreshToken) {
//       axios
//         .get('/api/auth/me', {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         })
//         .then((response) => {
//           setUser(response.data);
//           setLoading(false);
//         })
//         .catch(() => {
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// import { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);

//   const saveToken = (token) => {
//     localStorage.setItem('token', token);
//     setToken(token);
//   };

//   const removeToken = () => {
//     localStorage.removeItem('token');
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ token, saveToken, removeToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };