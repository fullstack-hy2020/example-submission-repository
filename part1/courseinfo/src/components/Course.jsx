import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
function Course(props) {
  const { course } = props;

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default Course;
