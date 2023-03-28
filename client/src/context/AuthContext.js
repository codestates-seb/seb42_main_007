import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("accessToken") || null
  );

  const setAuthToken = (token) => {
    localStorage.setItem("accessToken", token);
    setToken(token);
  };

  const removeAuthToken = () => {
    localStorage.removeItem("accessToken");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, setAuthToken, removeAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// useEffect(() => {
//   const accessToken = localStorage.getItem('accessToken');
//   const refreshToken = localStorage.getItem('refreshToken');

//   if (accessToken && refreshToken) {
//     setAuth(true);
//   } else {
//     setAuth(false);
//   }
// }, []);

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return auth;
};

// import { createContext, useState, useEffect, useContext } from 'react';

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const setAuth = (authStatus) => {
//     setIsAuthenticated(authStatus);
//   };

// useEffect(() => {
//   const accessToken = localStorage.getItem('accessToken');
//   const refreshToken = localStorage.getItem('refreshToken');

//   if (accessToken && refreshToken) {
//     setAuth(true);
//   } else {
//     setAuth(false);
//   }
// }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => {
//   const accessToken = localStorage.getItem('accessToken');
//   const refreshToken = localStorage.getItem('refreshToken');
//   return useContext(AuthContext);
// };

// export { AuthContext, AuthProvider, useAuth };
