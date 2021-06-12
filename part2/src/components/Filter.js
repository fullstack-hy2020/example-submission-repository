import React from 'react'

const Filter = ({ searchQuery, setSearchQuery }) => {

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value)
  }
  return (
    <div>filter shown with<input value={searchQuery} onChange={handleQueryChange}/></div>
  )
}

export default Filter
