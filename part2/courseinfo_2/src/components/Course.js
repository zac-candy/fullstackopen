import React from "react";


const Course = ({course}) => {

    const exercise = course.parts.map(part => part.exercises)
    const total = exercise.reduce((a,b) => a+b)

    return (
        <div>
            <h2>{course.name}</h2>
            {course.parts.map(part => <p key = {part.id}>{part.name} {part.exercises}</p>)}
            <h3>total of {total} exercises</h3>
        </div>
    )
}

export default Course;