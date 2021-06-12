import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const getRandomInt = (max) => Math.floor(Math.random() * max)
  // const [points, setPoints] = useState(anecdotes.map(() => 0))
  const [points, setPoints] = useState(anecdotes.map(() => 0))

  const copy = [...points]
  const updateVote = (selected) => {
    copy[selected] += 1
    setPoints(copy)
  }
  const suffix = (voteCount) => voteCount < 2 ? "" : "s"

  return (
    <div>
      {anecdotes[selected]}<br/>
      has {points[selected]} vote{suffix(points[selected])}<br/>
      <button onClick={() => updateVote(selected)}>vote</button>
      <button onClick={() => setSelected(getRandomInt(6))}>next anecdote</button>
      <MostVotes anecdotes={anecdotes} points={points}></MostVotes>
    </div>
  )
}

const MostVotes = ({ anecdotes, points }) => {
  const maxIndex = points.reduce((prev, next, index) => {
      return prev[0] < next ? [next, index] : prev
    }, [0, 0])[1]
  const suffix = () => points[maxIndex] < 2 ? "" : "s"
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[maxIndex]}<br/>
        has {points[maxIndex]} vote{suffix()}
      </div>
    </div>
  )
}

export default App
