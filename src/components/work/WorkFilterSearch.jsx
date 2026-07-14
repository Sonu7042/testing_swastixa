import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-full bg-black flex justify-center py-10">
      {/* Outer wrapper box */}
      <div className="w-[90%] max-w-5xl flex items-center justify-between border border-gray-500 rounded-xl px-6 py-4">

        {/* LEFT — Search input section */}
        <div className="relative flex items-center gap-3">
          {/* Search Icon */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-white"
          >
            <Search size={22} />
          </button>

          {/* Search Input (shows only when clicked) */}
          {showSearch && (
            <input
              type="text"
              placeholder="search"
              className="bg-transparent border border-gray-600 text-white px-3 py-1 rounded-lg outline-none w-64 transition-all"
            />
          )}
        </div>

        {/* RIGHT — Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-black bg-white px-6 py-2 rounded-lg flex items-center gap-3"
          >
            ALL LEAST
            <ChevronDown size={20} />
          </button>

          {/* Dropdown menu */}
          {showDropdown && (
            <div className="absolute right-0 top-12 bg-white text-black rounded-lg shadow-lg w-40 py-2">
              <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 1</p>
              <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 2</p>
              <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 3</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SearchBar;
