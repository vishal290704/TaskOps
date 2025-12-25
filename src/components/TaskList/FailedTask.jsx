import React, { useState } from "react";

const FailedTask = ({ task }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = task.description.length > 120;

  return (
    <div
      className="
        w-full min-h-[260px]
        bg-[#0f172a]
        border border-red-600/30
        rounded-2xl
        p-5
        flex flex-col
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold px-3 py-1 rounded-full
                         bg-red-500/10 text-red-400">
          {task.category}
        </span>

        <span className="text-xs text-gray-400">
          {task.date}
        </span>
      </div>

      {/* Content */}
      <div className="mt-4 flex-1">
        <h2 className="text-base font-semibold text-white leading-snug">
          {task.title}
        </h2>

        <p
  className={`text-sm text-gray-400 mt-2 leading-relaxed
    ${expanded ? "" : "line-clamp-3"}
  `}
  style={{ minHeight: "72px" }}   // 👈 FIX
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
      <div className="border-t border-gray-700/60 my-4"></div>

      {/* Status */}
      <div className="min-h-[44px] flex items-center">
        <button
          disabled
          className="w-full bg-red-600/20 text-red-400
                     text-sm py-2.5 rounded-lg cursor-default"
        >
          Failed ✕
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
