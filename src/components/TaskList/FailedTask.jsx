import React from "react";

const FailedTask = () => {
  return (
    <div className="shrink-0 h-full w-71.25 p-5 bg-red-400 mx-5 rounded-xl relative">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">15 Dec 2025</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
        temporibus dolores nam, maxime repellendus maiores.
      </p>
      <div className="absolute flex justify-between gap-3 bottom-5 left-5 right-5">
        <button
          className="w-full bg-red-700 text-white text-sm py-2 rounded-md
                opacity-90
               shadow-md transition-all"
          disabled
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
