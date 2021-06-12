import React from 'react'

const Course = ({ course }) => {
    return (
      <div>
          <h1>{course.name}</h1>
          <p>
              {course.parts[0].name} {course.parts[0].exercises}
          </p>
          <p>
              {course.parts[1].name} {course.parts[1].exercises}
          </p>
          <p>
              {course.parts[2].name} {course.parts[2].exercises}
          </p>
      </div>
    )
}


export default Course