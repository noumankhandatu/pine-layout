import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-96	">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M22 22l-6-6" />
          <circle cx="10.5" cy="10.5" r="7.5" />
        </svg>
      </div>
      <input
        style={{ backgroundColor: "#e4e5ea" }}
        className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-bgPrimary"
        type="text"
        placeholder="Search Packages and users or apps..."
      />
    </div>
  );
};

export default SearchBar;
