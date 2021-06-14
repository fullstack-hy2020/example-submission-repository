import React, {useEffect, useState} from 'react'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import PersonService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    PersonService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

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
