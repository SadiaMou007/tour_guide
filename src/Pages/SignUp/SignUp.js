import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init.js";

import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [cpassword, setCpassword] = useState({ value: "", error: "" });

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const pass = e.target.password.value;
    const cpass = e.target.confirmPassword.value;
    createUserWithEmailAndPassword(email, pass);
    console.log(name, email, pass, cpass);
  };
  if (user) {
    navigate("/home");
  }
  return (
    <div className=" w-50  container-fluid vh-100 my-5 s-container">
      <div className="login-c">
        <h3 className="text-center my-2">Sign Up</h3>
        <form onSubmit={handleSignUp}>
          <div className="p-3">
            <label htmlFor="name" className="">
              Name
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                id="name"
                className="w-100 p-2 rounded"
              />
            </div>
          </div>
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
                required
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
                required
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
              className="w-100 p-2 rounded border-0 bg-success text-white bg-opacity-50"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center mb-3">
            Already have an account?{" "}
            <Link to={"/login"} className="text-decoration-none">
              Login
            </Link>{" "}
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