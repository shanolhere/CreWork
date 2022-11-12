import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (res) => {
        navigate("/products");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  const guestLoginHandler = () => {
    setFormData({ ...formData, email: "test@gmail.com", password: "test123" });
    toast.success(`Logged as Guest!`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-moveTask"
    });
  };

  return (
    <div className="signup-container container my-6 py-4 mx-auto flex flex-col justify-center items-center gap-5 max-w-sm bg-neutral-100 text-black">
      <h2 className="text-center font-semibold text-2xl">LogIn to your account</h2>
      <form onSubmit={submitHandler}>
        <div className="input flex flex-col justify-start items-start gap-2 py-2">
          <label className="font-bold">Email:</label>
          <input
          className="outline-none border-black border-2 rounded-md text-lg p-1"
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="input flex flex-col justify-start items-start gap-2">
          <label className="font-bold">Password:</label>
          <input
            className="outline-none border-black border-2 rounded-md text-lg p-1"
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter password"
            required
          />
        </div>
        <b className="error text-red-500">{errorMsg}</b>
        <div className="input flex flex-col justify-center items-center gap-2 py-4">
            <input type="submit" value="Submit" className="submitBtn bg-sky-500 p-2 rounded-md text-white text-lg  hover:cursor-pointer" />
        </div>
        <div className="input flex flex-col justify-center items-center gap-2 py-2">
            <input
            type="submit"
            value="Guest Login"
            className="submitBtn bg-sky-500 p-2 w-1/1 rounded-md text-white hover:cursor-pointer text-lg"
            onClick={guestLoginHandler}
            />
        </div>
      </form>

      <div className="text-center font-semibold text-lg flex flex-row gap-2">
        Don't have an account? <NavLink to="/signup"><p className="text-sky-500 text-md"> SignUp</p></NavLink> here.
      </div>
    </div>
  );
};

export default Login;