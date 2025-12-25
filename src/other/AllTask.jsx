import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-4 sm:p-5 mt-6 rounded">
      
      {/* ===== Desktop Header ===== */}
      <div className="hidden md:flex bg-red-700 mb-3 py-2 px-4 rounded font-medium">
        <div className="w-1/5">Employee</div>
        <div className="w-1/5">New</div>
        <div className="w-1/5">Active</div>
        <div className="w-1/5">Completed</div>
        <div className="w-1/5">Failed</div>
      </div>

      {/* ===== Data ===== */}
      <div className="space-y-3">
        {userData?.map((emp, idx) => (
          <div
            key={idx}
            className="
              bg-gray-900 border border-emerald-500 rounded-lg p-4
              md:flex md:items-center md:justify-between
            "
          >
            {/* Mobile Card View */}
            <div className="md:hidden space-y-1 text-sm">
              <p className="font-semibold text-white">
                {emp.firstName}
              </p>
              <p className="text-blue-400">New: {emp.taskNumbers.newTask}</p>
              <p className="text-yellow-400">Active: {emp.taskNumbers.active}</p>
              <p className="text-green-400">Completed: {emp.taskNumbers.completed}</p>
              <p className="text-red-400">Failed: {emp.taskNumbers.failed}</p>
            </div>

            {/* Desktop Row View */}
            <div className="hidden md:flex w-full font-medium">
              <div className="w-1/5">{emp.firstName}</div>
              <div className="w-1/5 text-blue-400">{emp.taskNumbers.newTask}</div>
              <div className="w-1/5 text-yellow-400">{emp.taskNumbers.active}</div>
              <div className="w-1/5 text-green-400">{emp.taskNumbers.completed}</div>
              <div className="w-1/5 text-red-400">{emp.taskNumbers.failed}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
