import React from "react";

const Title = ({ children }: {children: string}) => {
  return React.createElement("h1", {
    className: "text-5xl text-white text-center font-bold"
  }, children);
}

export default Title