import React, { useState } from 'react'

// Create statistic child component for Statistics
const Statistic = (props) => {
  // Set the props value
  return (
    <tr>
      {props.text}
        <td> {props.displayValue}</td>
    </tr>
  )
}

// Create component to house the statistic components
// Receive props from App component
// Returns as fragment for app div
const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <table style={{ width:'400px'}}>
        <tbody>
          <Statistic text="Good" result={good + neutral +bad} displayValue={good} />
          <Statistic text="Neutral" result={good + neutral +bad} displayValue={neutral} />
          <Statistic text="Bad" result={good + neutral +bad} displayValue={bad} />
          <Statistic text="All" result={good + neutral +bad} displayValue={good + neutral + bad} />
          <Statistic text="Average" result={good + neutral +bad} displayValue={(good-bad) / (good + neutral + bad)} />
          <Statistic text="Positive" result={good + neutral +bad} displayValue={good / (good + neutral + bad) * 100 + "%"} />
        </tbody>
      </table>
    </>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [showtVisib, setShowVisib] = useState(false) // Set visibility hook, triggered in button props

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => {setGood(good + 1); setShowVisib(true)} } text='Good' />
      <Button handleClick={() => {setNeutral(neutral + 1); setShowVisib(true)}} text='Neutral' />
      <Button handleClick={() => {setBad(bad + 1); setShowVisib(true)}} text='Bad' />
      <h1>Statistics</h1>
      {showtVisib ? <Statistics good={good} neutral={neutral} bad={bad}/> : "No feedback given"}
    </div>
    
  )
}

export default App