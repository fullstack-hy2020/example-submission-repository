import React, { useState, useEffect } from 'react'
import axios from "axios";

const Weather = ({country}) => {
  const [weather, setWeather] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`)
      .then(response => {
        setWeather(response.data.current)
        setIsLoaded(true)
      })
  }, [])

  if(isLoaded) {
    return (
      <div>
        <h2>Watcher in {country.capital}</h2>
        <div><b>temperature:</b> {weather.temperature} Celcius</div>
        {weather.weather_icons.map(icon => <img src={icon}/>)}
        <div><b>wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}</div>
      </div>
    )
  } else {
    return ("")
  }
}


export default Weather