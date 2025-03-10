"use client"
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
//import Cookies from 'js-cookie';
//import jwt from 'jsonwebtoken';
//const secretKey = "sdfhj@j13j24";

export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [decodedUserData, setDecodedUserData] = useState();
  // const [currentUser, setCurrentUser] = useState(decodedUserData || null);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user2");
    setToken(userToken);
    if (userToken !== null && userToken !== "undefined") {
      const decodedUser = jwtDecode(JSON.stringify(userToken));
      setDecodedUserData([decodedUser]);
      setCurrentUser([decodedUser]);
    }
    else {
      setCurrentUser(null);
    }
  }, []);
  console.log("decodedUserData : " , decodedUserData);
  
  const login = async (inputs) => {
    try {
      const res = await axios.post(
        import.meta.env.VITE_BACKEND + "/api/auth/checkLogin",
        { inputs }
      );

      console.log(res.data.token);
      setToken(res.data.token);

      
     // Cookies.set('jwt2', JSON.stringify(res.data.refreshToken), { httpOnly: true });

      const decodedToken = jwtDecode(JSON.stringify(res.data.token));
      localStorage.setItem("user2", JSON.stringify(res.data.token));
      setCurrentUser([decodedToken]);
    } catch (err) {
      return false;
    }
  };

  // useEffect(() => {
  //   localStorage.setItem("user2", JSON.stringify(currentUser));
  // }, [currentUser]);
  const clearUser = () => {
    setCurrentUser(null);
  };
  return (
    <AuthContext.Provider value={{ currentUser, login, clearUser }}>
      {children}
    </AuthContext.Provider>
  );
};

