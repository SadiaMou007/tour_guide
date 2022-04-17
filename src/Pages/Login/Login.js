import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" w-50  container-fluid vh-100 my-5 s-container">
      <div className="login-c">
        <h3 className="text-center my-2">Login</h3>
        <form>
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
            <button
              type="submit"
              className="w-100 p-2 rounded border-0 bg-primary text-white bg-opacity-50"
            >
              Login
            </button>
          </div>
          <p className="text-center mb-3">
            New to Travel World? <Link to={"/signup"}>Register</Link>{" "}
          </p>
        </form>
        <p className="my-3 text-center">Or</p>

        <div className="p-3">
          <button type="submit" className="w-100 p-2 rounded border-0 g-btn">
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
