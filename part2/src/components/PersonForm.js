import React, {useState} from 'react'
import PersonService from "../services/persons";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.map(obj => obj.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      PersonService.create(newPerson).then(returnedPerson =>
        setPersons(persons.concat(returnedPerson))
      )

    }
  }

  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
