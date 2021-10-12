import React, {useState} from "react";


const Button = ({name, event}) => {
  return (
    <button onClick = {event}>{name}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const [good, neutral, bad] = props.allData
  const total = good + neutral + bad
  const score = good*1 + neutral*0 + bad*(-1)
  if (total === 0) {
    return (
      <div>
        <p>no feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
        <StatisticLine text = "good" value = {good} />
        <StatisticLine text = "neutral" value = {neutral} />
        <StatisticLine text = "bad" value = {bad} />
        <StatisticLine text = "all" value = {total} />
        <StatisticLine text = "average" value = {score/total} />
        <StatisticLine text = "positive" value = {(good/total)*100} />
        </tbody>  
      </table>
    </div>
  )

}





const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allData = [good, neutral, bad]

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button name = 'good' event = {handleGood} />
        <Button name = 'neutral' event = {handleNeutral} />
        <Button name = 'bad' event={handleBad} />
      </div>
      <h2>statistics</h2>
      <Statistics allData = {allData} />
      
    </div>
  )
}

export default App;
