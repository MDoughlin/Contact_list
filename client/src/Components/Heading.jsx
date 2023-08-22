import React from 'react';
import { Box } from '@mui/material';

const Heading = (props) => {
  return (
    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h1>{props.heading}</h1>
    </Box>
  );
};
export default Heading;
