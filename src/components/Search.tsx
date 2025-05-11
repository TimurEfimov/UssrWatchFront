import React from "react";

export const Search: React.FC = () => {
  return (
    <div className="relative">
      <svg
        className="w-4 h-4 text-gray-500 absolute top-2 left-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
      <input
        type="search"
        id="search"
        className="block w-2xs h-3 p-4 ps-8 text-sm text-gray-900 border-none rounded-lg bg-gray-50"
        placeholder="Поиск часов, кода"
        required
      />
    </div>
  );
};
