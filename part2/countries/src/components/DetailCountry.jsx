import React from 'react'

const DetailCountry = ({ country }) => {
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
    </div>
  )
}

export default DetailCountry
