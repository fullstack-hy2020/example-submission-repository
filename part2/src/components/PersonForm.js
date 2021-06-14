import React, {useState} from 'react'
import PersonService from "../services/persons";

const PersonForm = ({ persons, setPersons, setInfoMessage }) => {
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
    const samePerson = persons.find(obj => obj.name === newName)
    if (samePerson) {
      if (window.confirm(`${newName} already exists. Do you want to update the phone number?`)) {
        const updatedPerson = {
          name: newName,
          number: newNumber
        }
        PersonService.update(samePerson.id, updatedPerson).then(updated =>
          setPersons(persons.map(person => person.id === updated.id? updated : person))
        )
        setInfoMessage(`Updated phone number of ${newName}`)
        setTimeout(() => {
          setInfoMessage(null)
        }, 5000)
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      PersonService.create(newPerson).then(returnedPerson =>
        setPersons(persons.concat(returnedPerson))
      )
      setInfoMessage(`Added ${newName}`)
      setTimeout(() => {
        setInfoMessage(null)
      }, 5000)
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
