import React, {useState} from 'react'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-123456'},
    {name: 'Ada Lovelace', number: '39-44-5323523'},
    {name: 'Dan Abramov', number: '12-43-234345'},
    {name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])

  const [searchQuery, setSearchQuery] = useState('')

  return (

    <div>
      <h2>Phonebook</h2>
      <Filter query={searchQuery} setSearchQuery={setSearchQuery}/>

      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons}/>

      <h3>Numbers</h3>
      <Persons persons={persons} searchQuery={searchQuery}/>
    </div>
  )
}

export default App
