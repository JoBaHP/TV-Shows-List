import React from "react";
import loaderSrc from "../../assets/loader.gif";

const Loader = (props) => {
  return (
    <div>
      <img src={loaderSrc} alt="Loader icon" />
    </div>
  );
};

export default Loader;
