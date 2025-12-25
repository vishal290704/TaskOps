import React, { useState } from "react";

const FailedTask = ({ task }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = task.description.length > 120;

  return (
    <div
      className="
        w-full min-h-[250px]
        bg-[#0f172a]
        border border-red-600/30
        rounded-2xl
        p-6
        flex flex-col
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className="
            text-xs font-semibold px-3 py-1 rounded-full
            bg-red-500/10 text-red-400 tracking-wide
          "
        >
          {task.category}
        </span>

        <span className="text-xs text-gray-400">
          {task.date}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5 flex-1">
        <h2 className="text-lg font-semibold text-white leading-snug">
          {task.title}
        </h2>

        <p
          className={`text-sm text-gray-400 mt-2 leading-relaxed
            ${expanded ? "" : "line-clamp-3"}
          `}
        >
          {task.description}
        </p>

        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1 text-xs text-red-400 hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700/60 my-5"></div>

      {/* Status */}
      <div className="min-h-[44px] flex items-center">
        <button
          disabled
          className="
            w-full
            bg-red-600/20
            text-red-400
            text-sm font-medium
            py-2.5 rounded-lg
            cursor-default
          "
        >
          Failed ✕
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
