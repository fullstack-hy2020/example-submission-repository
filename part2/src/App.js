import React, {useEffect, useState} from 'react'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import PersonService from "./services/persons";
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [infoMessage, setInfoMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const Notification = ({ infoMessage }) => {
    if (infoMessage === null) {
      return null
    }

    return (
      <div className="info">
        {infoMessage}
      </div>
    )
  }
  const ErrorNotification = ({ errorMessage }) => {
    if (errorMessage === null) {
      return null
    }

    return (
      <div className="error">
        {errorMessage}
      </div>
    )
  }

  useEffect(() => {
    PersonService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

  const [searchQuery, setSearchQuery] = useState('')

  return (

    <div>
      <Notification infoMessage={infoMessage}></Notification>
      <ErrorNotification errorMessage={errorMessage}></ErrorNotification>
      <h2>Phonebook</h2>
      <Filter query={searchQuery} setSearchQuery={setSearchQuery}/>

      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setInfoMessage={setInfoMessage}/>

      <h3>Numbers</h3>
      <Persons persons={persons} searchQuery={searchQuery} setPersons={setPersons} setErrorMessage={setErrorMessage}/>
    </div>
  )
}

export default App
