import React from 'react'

const Country = ({country}) => {
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
}


export default Country