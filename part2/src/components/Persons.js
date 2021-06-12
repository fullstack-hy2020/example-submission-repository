import React, {useState} from 'react'
import Person from "./Person";
import Filter from "./Filter"

const Persons = ({ persons, searchQuery }) => {
  return (
    <div>
    {persons.filter(p => !searchQuery || p.name.includes(searchQuery) || p.number.includes(searchQuery))
        .map(person => <Person person={person}/>)}
    </div>
  )
}

export default Persons
