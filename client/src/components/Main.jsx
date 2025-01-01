import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";

const Main = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-gray-800 text-white p-4 ">
          <h1 className="text-2xl font-bold mb-6">Employee Data</h1>
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/form"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-600 p-2 rounded-md"
                  : "p-2 rounded-md hover:bg-gray-700"
              }>
              Fill Form
            </NavLink>
            <NavLink
              to="/table"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-600 p-2 rounded-md"
                  : "p-2 rounded-md hover:bg-gray-700"
              }>
              View Table
            </NavLink>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<ListTodo />} />
            <Route path="/form" element={<InputTodo />} />
            <Route path="/table" element={<ListTodo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Main;
