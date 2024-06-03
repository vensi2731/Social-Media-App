import { useState, createContext, useEffect } from "react";
import me from "../assets/a3.jpg"
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const login = async (inputs) => {
    const res =await axios.post("http://localhost:8800/api/auth/login", inputs, { 
      //needed to write below beacuse we are using cookies
      withCredentials: true, 
    });

    setCurrentUser(res.data)
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
