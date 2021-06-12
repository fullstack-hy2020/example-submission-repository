import React from 'react'

const Course = ({course}) => {
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map(part =>
        <p>
          {part.name} {part.exercises}
        </p>
      )}
      <p><b>Total of {course.parts.reduce((sum, elem) => sum + elem.exercises, 0)} exercises</b></p>
    </div>
  )
}


export default Course