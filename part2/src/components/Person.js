import React from 'react'
import PersonService from "../services/persons";

const Person = ({ person, handleDeleteFunc }) => {

  return (
    <div>{person.name} {person.number} <button onClick={() => handleDeleteFunc(person)}>delete</button></div>
  )
}

export default Person