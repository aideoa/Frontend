import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to trigger search
  const handleSearch = () => {
    if (searchTerm.trim()) {
      onResults(searchTerm); // Send search term to parent
      setSearchTerm(""); // Clear input after searching
    }
  };

  return (
    <div className="relative min-w-[55%]">
      <div className="relative">
        {/* Input field listens for Enter key */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} // 🚀 Press Enter to search
          className="pr-8 pl-4 py-2 border w-full rounded-full text-sm border-gray-300 outline-[#5A00A0] text-slate-700 font-medium"
          placeholder="Search User"
        />

        {/* Search icon also triggers search on click */}
        <CiSearch
          className="absolute top-3 right-3 cursor-pointer"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
