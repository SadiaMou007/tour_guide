import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./SignUp.css";
const SignUp = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [cpassword, setCpassword] = useState({ value: "", error: "" });
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" w-50  container-fluid vh-100 my-5 s-container">
      <div className="login-c">
        <h3 className="text-center my-2">Sign Up</h3>
        <form onSubmit={handleSignUp}>
          <div className="p-3">
            <label htmlFor="email" className="">
              Email
            </label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                id="email"
                className="w-100 p-2 rounded"
              />
            </div>
          </div>
          <div className="p-3">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                id="password"
                className="w-100 p-2 rounded"
              />
            </div>
          </div>
          <div className="p-3">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                className="w-100 p-2 rounded"
              />
            </div>
          </div>
          <div className="p-3">
            <button
              type="submit"
              className="w-100 p-2 rounded border-0 bg-primary text-white bg-opacity-50"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center mb-3">
            Already have an account? <Link to={"/login"}>Login</Link>{" "}
          </p>

          <p className="my-3 text-center">Or</p>
          <div className="p-3">
            <button type="submit" className="w-100 p-2 rounded border-0 g-btn">
              Sign up with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
