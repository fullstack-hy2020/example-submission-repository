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
  const parts = props.parts;
  return (
    <>
      {parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        );
      })}
    </>
  );
};

const Total = (props) => {
  const parts = props.parts;
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return (
    <>
      <h3>Total of {total} exercises</h3>
    </>
  );
};

const Course = (props) => {
  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </>
  );
};

export default Course;