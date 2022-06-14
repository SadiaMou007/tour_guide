import React from "react";
import "./HBtn.css";

const HBtn = () => {
  return (
    <div className="bc">
      <div className="flex">
        <button className="b p-2 rounded me-2 font-bold g">EXPLORE NOW</button>
        <button className="b p-2 rounded font-bold g">BOOK NOW</button>
      </div>
    </div>
  );
};

export default HBtn;
