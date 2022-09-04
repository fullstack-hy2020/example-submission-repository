import React from "react";
import StatisticLine from "./StatisticLine";
const Statistics = ({ states }) => {
  const [good, neutral, bad] = states;
  const sum = good + neutral + bad;
  const avg = sum / 3;
  const perecentage = (good / sum) * 100;

  if (sum === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={sum} />
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="positive" value={perecentage} />
    </div>
  );
};
export default Statistics;
