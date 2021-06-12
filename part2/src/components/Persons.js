import React from 'react'
import Person from "./Person";

const Persons = ({ persons, searchQuery }) => {
  return (
    <div>
    {persons.filter(p => !searchQuery || p.name.includes(searchQuery) || p.number.includes(searchQuery))
        .map(person => <Person key={person.name} person={person}/>)}
    </div>
  )
}

export default Persons
