import React from "react";
import notFound from "../../Images/pageNotFound.png";
import "./PageNotFound.css";
const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="w-75 mx-auto p-4">
        <div className="d-flex justify-content-center align-items-center">
          <img src={notFound} alt="" className="error-img" />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
