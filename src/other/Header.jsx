import React, { useState } from 'react'

const Header = ({ changeUser, data }) => {
  const name = data?.firstName || "Admin";

  const logOut = () => {
    localStorage.removeItem("loggedInUser");
    changeUser(null);
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {name} 👋
        </span>
      </h1>

      <button
        onClick={logOut}
        className="bg-red-600 text-white text-lg font-medium px-6 py-2 rounded-sm"
      >
        Logout
      </button>
    </div>
  );
};


export default Header