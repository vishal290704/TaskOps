import React from "react";

const NewTask = ({ task }) => {
  return (
    <div
      className="
        w-full min-h-[250px]
        bg-[#0f172a]
        border border-blue-600/30
        rounded-2xl
        p-6
        flex flex-col justify-between
        transition-all duration-200
        hover:border-blue-500 hover:shadow-xl
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className="
            text-xs font-semibold
            px-3 py-1 rounded-full
            bg-blue-500/10 text-blue-400
            tracking-wide
          "
        >
          {task.category}
        </span>

        <span className="text-xs text-gray-400">
          {task.date}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5">
        <h2 className="text-lg font-semibold text-white leading-snug">
          {task.title}
        </h2>

        <p className="text-sm text-gray-400 mt-2 leading-relaxed">
          {task.description}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700/60 my-5"></div>

      {/* Action */}
      <div className="mt-6 min-h-[44px] flex items-center">
  <button
    className="
      w-full
      bg-blue-600/90 hover:bg-blue-600
      text-white text-sm font-medium
      py-2.5 rounded-lg 
      transition-all
      active:scale-95
    "
  >
    Accept Task
  </button>
</div>
    </div>
  );
};

export default NewTask;
