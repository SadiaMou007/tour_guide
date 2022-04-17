import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passwordRef.current.value;
    signInWithEmailAndPassword(email, pass);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className=" w-50  container-fluid vh-100 my-5 s-container">
      <div className="login-c">
        <h3 className="text-center my-2">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="p-3">
            <label htmlFor="email" className="">
              Email
            </label>
            <div className="input-wrapper">
              <input
                ref={emailRef}
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
                ref={passwordRef}
                type="password"
                name="password"
                id="password"
                className="w-100 p-2 rounded"
                required
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
            New to Travel World?{" "}
            <Link to={"/signup"} className="text-decoration-none">
              Register
            </Link>{" "}
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
