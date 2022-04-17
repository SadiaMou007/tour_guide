import React from "react";

const Loading = () => {
  return (
    <div className="vh-100">
      <div class="text-center mt-3">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
