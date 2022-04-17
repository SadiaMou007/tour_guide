import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init.js";

import "./SignUp.css";
import SocialLogin from "../Login/SocialLogin/SocialLogin.js";

const SignUp = () => {
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [cpassword, setCpassword] = useState({ value: "", error: "" });

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const pass = e.target.password.value;
    const cpass = e.target.confirmPassword.value;

    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: name });
    console.log("update user profile");
    navigate("/home");
  };

  if (user) {
    console.log("user", user);
  }

  return (
    <div className=" w-50  container-fluid signup-container my-2 s-container">
      <div className="login-c">
        <h3 className="text-center my-2 text-success">Sign Up</h3>
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
          <div>
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name="terms"
              id="terms"
              className="p-2 ms-3 me-2"
            />
            <label
              htmlFor="terms"
              className={agree ? "text-success" : "text-danger"}
            >
              Accept our terms and conditions?{" "}
            </label>
          </div>
          <div className="p-3">
            <button
              disabled={!agree}
              type="submit"
              className="w-100 p-2 rounded border-0 bg-success text-white bg-opacity-50"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center mb-3">
            Already have an account?{" "}
            <Link to={"/login"} className="text-decoration-none text-primary">
              Login
            </Link>{" "}
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
