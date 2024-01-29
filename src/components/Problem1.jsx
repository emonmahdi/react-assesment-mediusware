import { useState } from "react";

const Problem1 = () => {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState("all");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = (val) => {
    setShow(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { name, status };
    setTasks([...tasks, newTask]);
    setName("");
    setStatus("");
  };
  console.log(tasks);

  const filteredData = tasks.filter((item) => {
    if (show === "all") return true;
    return item.status.toLowerCase() === show;
  });

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5 bg-info p-5">
          <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
          <div className="col-6">
            <form
              onSubmit={handleSubmit}
              className="row gy-2 gx-3 align-items-center mb-4"
            >
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  value={name}
                />
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Status: ex. active, completed, pending, archive"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-8">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <button
                  className={`nav-link ${show === "all" && "active"}`}
                  type="button"
                  onClick={() => handleClick("all")}
                >
                  All
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${show === "active" && "active"}`}
                  type="button"
                  onClick={() => handleClick("active")}
                >
                  Active
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${show === "completed" && "active"}`}
                  type="button"
                  onClick={() => handleClick("completed")}
                >
                  Completed
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${show === "pending" && "active"}`}
                  type="button"
                  onClick={() => handleClick("pending")}
                >
                  Pending
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${show === "archive" && "active"}`}
                  type="button"
                  onClick={() => handleClick("archive")}
                >
                  Archive
                </button>
              </li>
            </ul>
            <div className="tab-content"></div>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
