import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceBooking = () => {
  const { serviceId } = useParams();

  return (
    <div className="w-50 mx-auto vh-100 my-4">
      <div className="border mt-3 p-4">
        <h2 className="text-info text-center my-3"> Checkout</h2>
        <form>
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
          <button className="border-0 p-2 my-2 text-white bg-info">
            Proceed Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceBooking;
