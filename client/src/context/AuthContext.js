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

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const setAuthToken = (token) => {
//     localStorage.setItem('token', token);
//     setToken(token);
//   };

//   const removeAuthToken = () => {
//     localStorage.removeItem('token');
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ token, setAuthToken, removeAuthToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const auth = useContext(AuthContext);

//   if (!auth) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }

//   return auth;
// };

import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (authStatus) => {
    setIsAuthenticated(authStatus);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useAuth };
