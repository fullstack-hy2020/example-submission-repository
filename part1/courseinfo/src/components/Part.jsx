import React from "react";

function Part(props) {
  // Destructuring props
  const { part, exercises } = props;
  return (
    <div>
      {part}:{exercises}
    </div>
  );
}

export default Part;
