import React from "react";
import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const courseList = courses.map((course) => {
    return <Course key={course.id} course={course} />;
  });

  return (
    <div>
      <h1>Web development curriculum</h1>
      <p>{courseList}</p>
    </div>
  );
};

export default App;

// import Total from "./components/Total";
// const App = () => {
//   // const [left, setLeft] = useState(0);
//   // const [right, setRight] = useState(0);
//   // const [allClicks, setAllClicks] = useState([]);

//   // const handleLeft = () => {
//   //   setAllClicks(allClicks.concat("Left"));
//   //   setLeft(left + 1);
//   // };

//   // const handleRight = () => {
//   //   setAllClicks(allClicks.concat("Right"));

//   //   setRight(right + 1);
//   // };

//   return (
//     <div>
//       {/* <button onClick={() => console.log(`Clicked`)}>Click Me!</button> */}
//       {/* <Header />
//       <Content />
//       <Total /> */}
//       {/* <button onClick={handleLeft}>left: {left}</button>
//       <button onClick={handleRight}>right: {right}</button>
//       <h1>All Clicks:{allClicks.length}</h1>

//       <p>{allClicks.join(" ")}</p> */}
//     </div>
//   );
// };

// export default App;
