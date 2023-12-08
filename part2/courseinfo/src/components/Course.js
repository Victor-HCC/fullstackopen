import React from 'react'

const Header = ({ header }) => {
  return <h1>{header}</h1>
}

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {

  let sum = 0
  parts.forEach(part => {sum += part.exercises})

  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
      <p><b>total of {sum} exercises</b></p>
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
