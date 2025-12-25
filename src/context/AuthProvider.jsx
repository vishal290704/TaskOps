import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();
// localStorage.clear();


const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // 1️⃣ Load data on app start
  useEffect(() => {
    setLocalStorage(); // seed once
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  // 2️⃣ Sync changes back to localStorage
  useEffect(() => {
    if (userData) {
      localStorage.setItem("employees", JSON.stringify(userData));
    }
  }, [userData]);


  return (
    <div>
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider