import React from "react";

const Heading = (props) => {
  return (
    <>
      <h1 className="lg:text-4xl text-2xl font-light text-teal-500 py-5">
        {props.children}
      </h1>
    </>
  );
};

export default Heading;
