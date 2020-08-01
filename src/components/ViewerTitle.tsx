import React from "react";

import { Typography } from "@material-ui/core";

interface Props {
  children: string;
}

const ViwerTitle: React.FC<Props> = ({ children }) => {
  return (
    <Typography variant="h4" gutterBottom>
      {children}
    </Typography>
  );
};

export default ViwerTitle;
