import React from 'react';

const Heading = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h1>{props.heading}</h1>
    </div>
  );
};
export default Heading;
