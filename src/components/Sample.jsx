import { useState, useEffect } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("All");

  const handleClick = (filter) => {
    // Set the selected status when a button is clicked
    setStatus(filter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation if needed.
    const newTask = { name, status };
    setTasks([...tasks, newTask]);
    setName("");
  };

  useEffect(() => {
    // Fetch tasks or use your data source here
    // Replace this with your actual data fetching logic.
    const fetchData = async () => {
      // Fetch tasks and set them to the 'tasks' state.
      // Here, tasks should be an array of objects with 'name' and 'status' properties.
      // Example: [{ name: 'Task 1', status: 'Active' }, { name: 'Task 2', status: 'Completed' }, ...]
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts.

  useEffect(() => {
    // Filtering and sorting logic based on the selected status.
    let filteredAndSortedTasks = [...tasks];

    if (status !== "All") {
      filteredAndSortedTasks = filteredAndSortedTasks.filter(
        (task) => task.status === status
      );
    }

    // Sorting logic: Active tasks first, then Completed tasks, and finally other statuses.
    filteredAndSortedTasks.sort((a, b) => {
      if (a.status === "Active" && b.status !== "Active") return -1;
      if (a.status === "Completed" && b.status !== "Completed") return 1;
      return 0;
    });

    setFilteredTasks(filteredAndSortedTasks);
  }, [tasks, status]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
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
                className={`nav-link ${status === "All" && "active"}`}
                type="button"
                onClick={() => handleClick("All")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${status === "Active" && "active"}`}
                type="button"
                onClick={() => handleClick("Active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${status === "Completed" && "active"}`}
                type="button"
                onClick={() => handleClick("Completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
