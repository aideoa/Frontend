import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useMembers from "../../../hooks/useMembers";

const SearchBar = ({ data, onResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("AIDEOA ID"); // Default search type
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const searchTypes = [
    "mobile",
    "name",
    "email",
    "organization",
    "AIDEOA ID",
    "UserType",
  ];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Filter data based on searchType and searchTerm
      const filteredData = data.filter((item) => {
        switch (searchType) {
          case "mobile":
            return item.mobile.toLowerCase().includes(searchTerm.toLowerCase());
          case "name":
            return item.fullName
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          case "email":
            return item.email.toLowerCase().includes(searchTerm.toLowerCase());
          case "organization":
            return item.organization
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          case "AIDEOA No":
            return item["AIDEOA No"].toString().includes(searchTerm);
          case "UserType":
            return item.UserType.toLowerCase().includes(
              searchTerm.toLowerCase()
            );
          default:
            return false;
        }
      });

      // Pass filtered data to parent component
      onResults(filteredData);
    }
  };

  return (
    <div className="relative w-[55%]">
      <div className="relative">
        <CiSearch
          className="absolute top-3 left-3 cursor-pointer"
          onClick={handleSearch}
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
          placeholder={`Search by ${searchType}`}
        />
      </div>

      <div className="relative">
        <button
          className="absolute top-2 right- sm:right-2 text-sm bg-gray-200 rounded px-4 py-2 cursor-pointer flex items-center justify-between"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{ minWidth: "100px", textAlign: "center" }} // Ensure consistent width
        >
          {searchType} ▼
        </button>

        {dropdownOpen && (
          <ul
            className="absolute bg-white border border-gray-300 rounded shadow-lg w-full mt-1 z-20 sm:w-40 md:w-auto md:max-w-none md:overflow-visible"
            style={{
              maxWidth: "200px",
              overflow: "hidden",
              position: "absolute", // Ensure it stays relative to the button
              top: "40px", // Position it below the button
            }}
          >
            {searchTypes.map((type) => (
              <li
                key={type}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSearchType(type);
                  setDropdownOpen(false);
                }}
              >
                {type}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
