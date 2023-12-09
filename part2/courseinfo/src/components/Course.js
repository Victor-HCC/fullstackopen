import React from 'react'

const Header = ({ header }) => {
  return <h2>{header}</h2>
}

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {

  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course
