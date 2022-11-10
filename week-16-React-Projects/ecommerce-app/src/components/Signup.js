import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Signup = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formData.displayName || !formData.email || !formData.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (res) => {
        console.log(res);
        const user = res.user;
        await updateProfile(user, {
          displayName: formData.displayName
        });
        navigate("/products");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    
      <div className="signup-container container my-6 py-4 mx-auto flex flex-col justify-center items-center gap-5 max-w-sm bg-neutral-100 text-black">
        <h2 className="text-center font-semibold text-2xl">Create account</h2>
        <form onSubmit={submitHandler}>
          <div className="input flex flex-col justify-start items-start gap-2 py-2">
            <label className="font-bold">Display Name:</label>
            <input
              className="outline-none border-black border-2 rounded-md text-lg p-1"
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={changeHandler}
              placeholder="Enter display name"
              required
            />
          </div>
          <div className="input flex flex-col justify-start items-start gap-2">
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
        </form>
        <div className="text-center font-semibold text-lg flex flex-row gap-2">
          Already have account? <NavLink to="/login"><p className="text-sky-500 text-md"> LogIn</p></NavLink> here.
        </div>
      </div>
   
  );
};

export default Signup;


