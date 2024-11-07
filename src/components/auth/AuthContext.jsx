"use client"
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [logged, setLogged] = useState(false)
  const api = process.env.NEXT_PUBLIC_API_URL;

  const checkLogged = async () => {
    try {
      const response = await axios.get(`${api}user`, { withCredentials: true });
      const { message } = response.data;
      if (message === "logged in") {
        setLogged(true)
      } else {
        setLogged(false)
      }
    } catch (error) {
      setLogged(false);
      console.error("Error checking login status:", error);
    }
  }

  useEffect(() => {
    checkLogged(); // Run once on mount
  }, []);

  return (
    <AuthContext.Provider value={{ logged, checkLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
