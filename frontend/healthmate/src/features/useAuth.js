import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ isAuthenticated: false, id: null });

  useEffect(() => {
    // Check for the token in local storage when the app initializes
    const token = localStorage.getItem("token");
    if (token) {
      // If a token exists, the user is considered logged in
      setUser({ isAuthenticated: true });
    }
  }, []);

  const login = (token) => {
    // Set the user as authenticated and store the token
    setUser({ isAuthenticated: true, id: token });
    localStorage.setItem("token", token.user_id);
  };

//   const getUser = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/get-user/');
//       const data = response.data;
//       setUserData(data.user);
//     } catch (err) {
//       setError(err.message);
//     }
//   };


  
  const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };


  const logout = () => {
    // Clear the token and set the user as unauthenticated
    localStorage.removeItem("token");
    setUser({ isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
