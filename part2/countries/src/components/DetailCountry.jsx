import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY;

const DetailCountry = ({ country }) => {
  const [ weatherInfo, setWeatherInfo ] = useState(null);

  useEffect(() => {
    axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${country.capital}`)
      .then(res => {
        setWeatherInfo(res.data)
      })
  }, [country.capital])

  if (!weatherInfo) {
    return <div>Loading information...</div>;
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {Object.entries(country.languages).map(elem => <li key={elem[0]}>{elem[1]}</li>)}
      </ul>
      <img src={country.flags.svg} alt={country.flags.alt} height='150px' />

      <h2>Weather in {country.capital}</h2>
      <p><b>Temperature:</b> {weatherInfo.current.temperature} Celsius</p>
      <img src={weatherInfo.current.weather_icons[0]} alt='weather_icon' height='80px' />
      <p><b>Wind:</b> {weatherInfo.current.wind_speed} km/h, direction {weatherInfo.current.wind_dir}</p>
    </div>
  )
}

export default DetailCountry
