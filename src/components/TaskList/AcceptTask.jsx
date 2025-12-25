import React from "react";

const AcceptTask = ({ task }) => {
  return (
    <div
      className="w-full min-h-[250px] bg-[#0f172a] border border-gray-700/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:border-gray-500 hover:shadow-xl"
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

        <span className="text-xs text-gray-400">{task.date}</span>
      </div>

      {/* Content */}
      <div className="mt-5">
        <h2 className="text-lg font-semibold text-white leading-snug">
          {task.title}
        </h2>

        <p className="text-sm text-gray-400 mt-2 leading-relaxed min-h-[48px]">
          {task.description}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700/60 my-5"></div>

      {/* Actions */}
      <div className="mt-6 min-h-[44px] flex items-center">
        <button
          className="
            flex-1
            bg-emerald-600/90 hover:bg-emerald-600
            text-white text-sm font-medium
            py-2.5 rounded-lg
            transition-all
            active:scale-95
          "
        >
          Mark Complete
        </button>

        <button
          className="
            flex-1
            bg-red-600/90 hover:bg-red-600
            text-white text-sm font-medium
            py-2.5 rounded-lg
            transition-all
            active:scale-95
          "
        >
          Mark Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
