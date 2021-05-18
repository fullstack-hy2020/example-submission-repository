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
  return (
    <div>
      good {good}<br />
      neutral {neutral}<br />
      bad {bad}<br />
      all {getAll()}<br />
      average {getAverage()}<br />
      positive {getPositive()} %<br />
    </div>
  )
}

export default App
