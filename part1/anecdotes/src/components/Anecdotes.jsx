import React from "react";
import { useState } from "react";
function Anecdotes() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  const [selected, setSelected] = useState(0);
  const handleClick = () => {
    let randomIndex = Math.trunc(Math.random() * 7);
    setSelected(randomIndex);
  };
  const [allVotes, setAllVotes] = useState(Array(6).fill(0));
  const handleVoteClick = () => {
    const newAllVotes = [...allVotes];
    newAllVotes[selected] += 1;
    setAllVotes(newAllVotes);
  };
  const Winner = ({ anecdotes, allVotes }) => {
    const highestVoteCount = Math.max(...allVotes);
    const winnerIndex = allVotes.indexOf(highestVoteCount);
    const winner = anecdotes[winnerIndex];
    if (highestVoteCount === 0) {
      return <p>No votes yet</p>;
    }

    return (
      <div>
        <p>{winner}</p>
        <p>has {highestVoteCount} votes</p>
      </div>
    );
  };
  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <br />
      <button onClick={handleClick}>Get random</button>
      <button onClick={handleVoteClick}>Vote</button>
      <br />
      <Winner anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  );
}

export default Anecdotes;
