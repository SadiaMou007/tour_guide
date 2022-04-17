import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceBooking = () => {
  const { serviceId } = useParams();

  return (
    <div>
      Id:
      {serviceId}
    </div>
  );
};

export default ServiceBooking;
