import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import google from "../../../Images/SocialIcons/google1.png";

const SocialLogin = () => {
  let errorMessage;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (error) {
    errorMessage = <p className="text-danger text-center">{error.message}</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px" }}
          className="bg-dark w-50 bg-opacity-50"
        ></div>
        <p className="px-2 mt-2">or</p>
        <div
          style={{ height: "1px" }}
          className="bg-dark w-50 bg-opacity-50"
        ></div>{" "}
      </div>
      <div className="p-3">
        <button
          type="submit"
          className="w-100 p-2 rounded border-0 g-btn"
          onClick={() => signInWithGoogle()}
        >
          <img src={google} alt="" className="px-2" />
          Sign up with Google
        </button>
      </div>
      {errorMessage}
    </div>
  );
};

export default SocialLogin;
