import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")

  const handleQuery = (event) => {
    setQuery(event.target.value)
  }

  const filterResult = (countries) => {
    const filteredResult = countries.filter(country => !query || country.name.toLowerCase().includes(query.toLowerCase()))
    if (filteredResult.length > 10) {
      return ("Too many matches, specify another filter")
    } else if (filteredResult.length <= 0) {
      return ("No matches, specify another filter")
    } else if (filteredResult.length === 1) {
      const country = filteredResult[0]
      return (
        <div>
          <h2>{country.name}</h2>
          <div>capital {country.capital}</div>
          <div>population {country.population}</div>
          <h3>languages</h3>
          <ul>{country.languages.map(language => <li>{language.name}</li>)}</ul>
          <img src={country.flag} height={200}/>
        </div>
      )
    } else {
      return (filteredResult.map(country => <div key={country.name}>{country.name}</div>))
    }
  }

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <div>find countries<input onChange={handleQuery} value={query}/></div>
      {filterResult(countries)}
    </div>
  )

}

export default App
