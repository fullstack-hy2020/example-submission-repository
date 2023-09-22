import { useState } from "react";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const average = (good - bad) / (good + neutral + bad);
  const positive = (good / (good + neutral + bad)) * 100;
  if (all === 0) {
    return (
      <>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive}%</div>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
