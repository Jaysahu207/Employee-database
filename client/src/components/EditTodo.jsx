import React, { useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);
  const [fname, setFname] = useState(todo.first_name);
  const [lname, setLname] = useState(todo.last_name);
  const [email, setEmail] = useState(todo.email);
  const [pnum, setPnum] = useState(todo.ph_num);
  const [job, setJob] = useState(todo.job_title);
  const [department, setDepartment] = useState(todo.department);
  const [salary, setSalary] = useState(todo.salary);
  const [city, setCity] = useState(todo.city);

  //edit description function

  const updateDescription = async (e) => {
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
      const response = await fetch(`http://localhost:5000/todos/${todo.t_id}`, {
        method: "PUT",
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
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.t_id}`}>
        Edit
      </button>
      {/* id =id10 */}
      <div
        className="modal fade"
        id={`id${todo.t_id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update info
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column gap-1">
              {" "}
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
                className="form-control"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => updateDescription(e)}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
