import React from "react";
import { Helmet } from "react-helmet-async";

const pageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}-Travel World</title>
    </Helmet>
  );
};

export default pageTitle;
