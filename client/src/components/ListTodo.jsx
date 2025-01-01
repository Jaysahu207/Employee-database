import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import SearchFilter from "./SearchFilter";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  //delete todo function
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      console.log(deleteTodo);
      setTodos(todos.filter((todo) => todo.t_id !== id));
      setFilteredTodos(filteredTodos.filter((todo) => todo.t_id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      console.log(jsonData); // Check if `first_name` or `fname` is present
      setTodos(jsonData);
      setFilteredTodos(jsonData);
    } catch (error) {
      console.log("Error fetching todos:", error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <>
      <h1 className="text-center  text-4xl font-semibold m-2">
        Employees Details
      </h1>
      {/* Filter Component */}
      <SearchFilter data={todos} setFilteredData={setFilteredTodos} />
      <table className="table table-bordered">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Job</th>
            <th>Department</th>
            <th>Salary</th>
            <th>City</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <tr key={todo.t_id}>
              {/* <td>{todo.t_id}</td> */}
              <td>{todo.first_name}</td>
              <td>{todo.last_name}</td>
              <td>{todo.email}</td>
              <td>{todo.ph_num}</td>
              <td>{todo.job_title}</td>
              <td>{todo.department}</td>
              <td>{todo.salary}</td>
              <td>{todo.city}</td>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteTodo(todo.t_id);
                  }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodo;
