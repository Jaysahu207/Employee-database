import React, { useState } from "react";

const SearchFilter = ({ data, setFilteredData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("all");

  // Function to sort data by a specific column
  const sortData = (column, order) => {
    const sortedData = [...data].sort((a, b) => {
      if (order === "asc") {
        return a[column].toString().localeCompare(b[column].toString());
      } else {
        return b[column].toString().localeCompare(a[column].toString());
      }
    });
    setFilteredData(sortedData);
  };

  // Function to filter data based on the search query and selected column
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = data.filter((row) => {
      if (selectedColumn === "all") {
        return Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(query)
        );
      } else {
        return row[selectedColumn]?.toString().toLowerCase().includes(query);
      }
    });

    setFilteredData(filteredData);
  };

  // Handle column selection from dropdown
  const handleColumnChange = (event) => {
    setSelectedColumn(event.target.value);
  };

  return (
    <div className="filter-container mb-4 p-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Dropdown to select column */}
      <div className="mb-4">
        <select
          value={selectedColumn}
          onChange={handleColumnChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 mb-4">
          <option value="all">All Columns</option>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
          <option value="salary">Salary</option>
          <option value="job_title">Job Title</option>
          <option value="city">City</option>
          {/* Add more options for additional columns */}
        </select>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 mb-4"
      />

      {/* Sort Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => sortData("first_name", "asc")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Sort First Name
        </button>
        <button
          onClick={() => sortData("salary", "asc")}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">
          Sort Salary ASC
        </button>
        <button
          onClick={() => sortData("salary", "desc")}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">
          Sort Salary DESC
        </button>
        <button
          onClick={() => sortData("job_title", "asc")}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">
          Sort Job ASC
        </button>
        <button
          onClick={() => sortData("city", "asc")}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">
          Sort City ASC
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
