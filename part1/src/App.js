import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const getAll = () => good + neutral + bad
  const getAverage = () => {
    const all = getAll()
    return all === 0 ? 0 : (good - bad) / getAll()
  }
  const getPositive = () => {
    const all = getAll()
    return all === 0 ? 0 : (good) / getAll()
  }
  if (getAll() === 0) {
    return (<div>No feedback given</div>)
  } else {
    return (
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={getAll()} />
          <Statistic text="average" value={getAverage()} />
          <Statistic text="positive" value={getPositive()} suffix={" %"} />
        </tbody>
      </table>
    )
  }
}

const Statistic = ({ text, value, suffix}) =>
  <tr>
    <td>{text}</td>
    <td>{value}{suffix}</td>
  </tr>



export default App
