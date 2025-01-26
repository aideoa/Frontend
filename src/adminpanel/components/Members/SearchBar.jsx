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
    </div>
  );
};

export default SearchBar;
