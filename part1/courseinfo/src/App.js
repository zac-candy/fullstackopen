import react from "react"

const Total = (props) => {
  return (
    <div>
      Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      {props.course.name}
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      {props.part.name} {props.part.exercises}
    </div>
  )
}

const Content = (props) => {
  const parts = props.course.parts
  return (
    <div>
      <Part part = {parts[0]} />
      <Part part = {parts[1]} />
      <Part part = {parts[2]} />
    </div>
  )

}
const App = () => {
  const course = {
    name: "Half Stack web development",
    parts: [
      {name: 'Fundamentals of React', exercises: 10},
      {name: 'Using props to pass data', exercises: 7},
      {name: 'states of a component', exercises: 14}
    ]
  }
  
  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />
      
    </div>
  )
}

export default App;
