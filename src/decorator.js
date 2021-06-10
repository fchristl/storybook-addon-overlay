import React from "react";

export const decorators = [
  (Story, { globals: { overlay } }) => {
    const overlayStyle = {
      backgroundImage: `url(${overlay}`,
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0.5,
    };
    const containerStyle = { position: "relative" };
    return (
      <div style={containerStyle}>
        <Story />
        <div style={overlayStyle} />
      </div>
    );
  },
];
