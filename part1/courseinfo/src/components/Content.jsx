import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  const partsList = parts.map((item) => {
    return <Part key={item.id} name={item.name} exercises={item.exercises} />;
  });
  return <div>{partsList}</div>;
};

export default Content;
