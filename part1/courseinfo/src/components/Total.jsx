import React from "react";

function Total() {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  return (
    <div>
      <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
}

export default Total;
