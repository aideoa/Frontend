import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useMembers from "../../../hooks/useMembers";

const SearchBar = ({ data, onResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Pass filtered data to parent component
      onResults(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <div className="relative min-w-[55%]">
      <div className="relative">
        
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-8 pl-4 py-2 border w-full rounded-full text-sm border-gray-300 outline-[#5A00A0] text-slate-700 font-medium"
          placeholder={`Search User`}
        />
        <CiSearch
          className="absolute top-3 right-3 cursor-pointer"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
