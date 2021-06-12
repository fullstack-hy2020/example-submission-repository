import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([{}])
  useEffect(() => {
    axios.get("http://localhost:3001/persons")
      .then(response => {
        console.log(response)
        setPersons(response.data)
      })
  }, [])
  return (
    <div>hello</div>
  )

}

export default App
