// import React from "react";

// function Total() {
//   const exercises1 = 10;
//   const exercises2 = 7;
//   const exercises3 = 14;
//   return (
//     <div>
//       <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   );
// }
// import React from "react";

// function Total(props) {
//   const { courses } = props;
//   const arr = courses.parts;
//   console.log(arr);
//   const total = arr.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue.exercises;
//   }, 0);

//   return (
//     <div>
//       <b>Total exercises:{total}</b>
//     </div>
//   );
// }

// export default Total;

import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((acc, item) => acc + item.exercises, 0);

  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  );
};

export default Total;
