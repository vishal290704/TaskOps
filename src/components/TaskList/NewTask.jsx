import React, { useState } from "react";

const NewTask = ({ task }) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = task.description.length > 120;

  return (
    <div
      className="
        w-full min-h-[250px]
        bg-[#0f172a]
        border border-blue-600/30
        rounded-2xl
        p-6
        flex flex-col
        transition-all duration-200
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold px-3 py-1 rounded-full
                         bg-blue-500/10 text-blue-400">
          {task.category}
        </span>
        <span className="text-xs text-gray-400">{task.date}</span>
      </div>

      {/* Content */}
      <div className="mt-5 flex-1">
        <h2 className="text-lg font-semibold text-white">
          {task.title}
        </h2>

        <p
          className={`text-sm text-gray-400 mt-2 leading-relaxed
            ${expanded ? "" : "line-clamp-3"}
          `}
        >
          {task.description}
        </p>

        {/* Read More / Less */}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1 text-xs text-blue-400 hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700/60 my-5"></div>

      {/* Action */}
      <div className="min-h-[44px] flex items-center">
        <button
          className="w-full bg-blue-600/90 hover:bg-blue-600
                     text-white text-sm py-2.5 rounded-lg
                     transition active:scale-95"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
