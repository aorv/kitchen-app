import React from "react";

export const Price = ({value}) => {
  const price = value.toFixed(2);

  return (
    <React.Fragment>
      &pound;{price}
    </React.Fragment>
  );
}
