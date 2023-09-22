const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  );
};

const Course = (props) => {
  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total
        total={
          props.course.parts[0].exercises +
          props.course.parts[1].exercises +
          props.course.parts[2].exercises
        }
      />
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
