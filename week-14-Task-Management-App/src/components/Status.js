import React, { useState, useRef, useEffect } from "react";
import uuid from "react-uuid";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Status = ({ status, tasks, setTasks }) => {
  const [showForm, setShowForm] = useState(false);

  const titleRef = useRef();
  const descRef = useRef();
  const priorityRef = useRef();

  const [priority, setPriority] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   if (items) {
  //    setTasks(items);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(tasks));
  // }, [tasks]);

  const handleClick = () => {
    setShowForm(true);
  };

  const saveHandler = (e) => {
    e.preventDefault();
    const titleEntered = titleRef.current.value;
    const descEntered = descRef.current.value;
    const priorityEntered = priorityRef.current.value;

    const data = {
      id: uuid(),
      title: titleEntered,
      description: descEntered,
      priority: priorityEntered,
      status: status,
      edit: false
    };

    setTasks((prevData) => {
      return [...prevData, data];
    });

    setShowForm(false);

    toast.success(`Task added to ${data.status} !`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-addTask"
    });
  };

  const editHandler = (task) => {
    //console.log(task);
    task = { ...task, edit: true };
    const remainedTasks = tasks.filter((taskItem) => taskItem.id !== task.id);

    setTasks([...remainedTasks, { ...task, edit: true }]);
  };

  const saveAfterEditHandler = (task) => {
    setTitle("");
    setPriority("");
    setDesc("");

    task = {
      ...task,
      edit: false,
      title: title ? title : task.title,
      description: desc ? desc : task.description,
      priority: priority ? priority : task.priority
    };
    const remainedTasks = tasks.filter((taskItem) => taskItem.id !== task.id);
    setTasks([task, ...remainedTasks]);

    toast.success(`Task in ${task.status} edited successfully!`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-saveTask"
    });
  };

  const deleteHandler = (task) => {
    const newTasks = tasks.filter((taskItem) => {
      return task.id !== taskItem.id;
    });
    setTasks(newTasks);

    toast.error(`Task removed from ${task.status} !`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-deleteTask"
    });
  };

  const moveLeftHandler = (task) => {
    let newStatus = "";
    if (task.status === "Backlog") {
      newStatus = "Done";
    } else if (task.status === "In Progress") {
      newStatus = "Backlog";
    } else {
      newStatus = "In Progress";
    }
    const selectedTask = { ...task, status: newStatus };
    let newTasks = tasks.filter((taskItem) => {
      return task.id !== taskItem.id;
    });
    newTasks = [...newTasks, selectedTask];
    setTasks(newTasks);

    toast.success(`Task moved from ${task.status} to ${newStatus} !`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-moveTask"
    });
  };

  const moveRightHandler = (task) => {
    let newStatus = "";
    if (task.status === "Backlog") {
      newStatus = "In Progress";
    } else if (task.status === "In Progress") {
      newStatus = "Done";
    } else {
      newStatus = "Backlog";
    }
    const selectedTask = { ...task, status: newStatus };
    let newTasks = tasks.filter((taskItem) => {
      return task.id !== taskItem.id;
    });
    newTasks = [...newTasks, selectedTask];
    setTasks(newTasks);

    toast.success(`Task moved from ${task.status} to ${newStatus} !`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-moveTask"
    });
  };

  const handleAllMoveLeft = (status) => {
    const relatedTasks = tasks.filter((task) => task.status === status);
    const remainingTasks = tasks.filter((task) => task.status !== status);
    let newStatus = "";
    const newTasks = relatedTasks.map((task) => {
      if (task.status === "Backlog") {
        task.status = "Done";
        newStatus = "Done";
      } else if (task.status === "In Progress") {
        task.status = "Backlog";
        newStatus = "Backlog";
      } else {
        task.status = "In Progress";
        newStatus = "In Progress";
      }
      return task;
    });

    //console.log(newTasks);

    setTasks([...remainingTasks, ...newTasks]);

    toast.success(`All Tasks moved from ${status} to ${newStatus} !`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-moveTask"
    });
  };

  const handleAllMoveRight = (status) => {
    const relatedTasks = tasks.filter((task) => task.status === status);
    const remainingTasks = tasks.filter((task) => task.status !== status);
    let newStatus = "";
    const newTasks = relatedTasks.map((task) => {
      if (task.status === "Backlog") {
        task.status = "In Progress";
        newStatus = "In Progress";
      } else if (task.status === "In Progress") {
        task.status = "Done";
        newStatus = "Done";
      } else {
        task.status = "Backlog";
        newStatus = "Backlog";
      }
      return task;
    });

    setTasks([...remainingTasks, ...newTasks]);

    toast.success(`All Tasks moved from ${status} to ${newStatus} !`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-moveTask"
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <h2>{status}</h2>
        <div className="btnContainer">
          <button onClick={() => handleAllMoveLeft(status)}>
            Move all tasks to Left
          </button>
          <button onClick={handleClick}>Add</button>
          <button onClick={() => handleAllMoveRight(status)}>
            Move all tasks to Right
          </button>
        </div>
        <div className="status">
          {showForm && (
            <div className="form">
              <input
                type="text"
                ref={titleRef}
                placeholder="Enter title"
                required
              />
              <input
                type="text"
                ref={descRef}
                placeholder="Enter description"
                required
              />
              <select ref={priorityRef}>
                <option>select Priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <button onClick={saveHandler}>Save</button>
            </div>
          )}
          {tasks.length > 0 && (
            <div className="">
              {tasks.map((task) => {
                if (task.status === status) {
                  return (
                    <div
                      className={`taskContainer ${task.priority}`}
                      key={task.id}
                    >
                      <button onClick={() => moveLeftHandler(task)}>
                        <BsChevronDoubleLeft size={18} />
                      </button>
                      {task.edit === false && <h3>{task.title}</h3>}
                      {task.edit && (
                        <div className="form">
                          <input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            defaultValue={task.title}
                            placeholder="Enter title"
                            required
                          />
                          <input
                            type="text"
                            onChange={(e) => setDesc(e.target.value)}
                            defaultValue={task.description}
                            placeholder="Enter description"
                            required
                          />
                          <select
                            onChange={(e) => setPriority(e.target.value)}
                            defaultValue={task.priority}
                          >
                            <option>select Priority</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                          </select>
                          <button onClick={() => saveAfterEditHandler(task)}>
                            Save
                          </button>
                        </div>
                      )}
                      <div className="btns">
                        {task.edit === false && (
                          <button onClick={() => editHandler(task)}>
                            Edit
                          </button>
                        )}
                        <button
                          className="deleteBtn"
                          onClick={() => deleteHandler(task)}
                        >
                          <AiOutlineClose size={18} />
                        </button>

                        <button onClick={() => moveRightHandler(task)}>
                          <BsChevronDoubleRight size={18} />
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Status;
