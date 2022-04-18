import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceBooking = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/services");
  };

  return (
    <div className="w-50 mx-auto vh-100 my-4">
      <div className="border mt-3 p-4">
        <h2 className="text-info text-center my-3">START BOOKING NOW</h2>
        <div>
          <h3>Service Id: {serviceId}</h3>
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className="my-2 p-2 w-100"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              className="my-2 p-4 w-100"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Phone number"
              className="my-2 p-2 w-100"
            />
          </div>
          <div className="d-flex align-items-center flex-column">
            <button className="border-0 p-2 m-2 text-white bg-info w-50 rounded">
              Proceed Checkout
            </button>
            <button
              className="bg-info text-white border-0 w-50 p-2 m-2 rounded"
              onClick={handleNavigate}
            >
              Back to Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;
