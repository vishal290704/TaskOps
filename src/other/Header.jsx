import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const Header = ({ changeUser, data }) => {
  const name = data?.firstName || "Admin";

  const logOut = () => {
    localStorage.removeItem("loggedInUser");
    changeUser(null);
  };

  return (
    <header className="flex items-center justify-between mb-2 -mt-6">
      {/* left side of header */}
      <div>
        <p className="text-sm text-gray-400 tracking-wide">Welcome back</p>
        <h1 className="text-3xl font-semibold text-white mt-1">
          {name}
          <span className="ml-2">👋</span>
        </h1>
      </div>

      {/* right side of header  */}
      <Navbar/>
      <button
        onClick={logOut}
        className="flex items-center gap-2
                   bg-red-600/90 hover:bg-red-600
                   text-white text-sm font-medium
                   px-5 py-2 rounded-lg
                   shadow-md hover:shadow-lg
                   transition-all duration-200
                   active:scale-95"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
