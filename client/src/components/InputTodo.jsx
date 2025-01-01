import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pnum, setPnum] = useState("");
  const [job, setJob] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [city, setCity] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        description,
        fname,
        lname,
        email,
        pnum,
        job,
        department,
        salary,
        city,
      };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="d-flex h-screen justify-content-center  align-items-center flex-column ">
        <h1 className="text-2xl font-semibold m-4">Enter Employee Data</h1>
        <form
          className="d-flex flex-column gap-3 w-100"
          onSubmit={onSubmitForm}
          style={{ maxWidth: "400px" }}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="text"
            className="form-control me-2"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <input
            type="text"
            className="form-control me-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <input
            type="text"
            className="form-control me-2"
            placeholder="Phone Number"
            value={pnum}
            onChange={(e) => setPnum(e.target.value)}
          />
          <input
            type="text"
            className="form-control me-2"
            placeholder="Job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
          <input
            type="text"
            className="form-control me-2"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input
            type="text"
            className="form-control me-2"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <input
            type="text"
            className="form-control me-2"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            className="form-control me-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </>
  );
};

export default InputTodo;
