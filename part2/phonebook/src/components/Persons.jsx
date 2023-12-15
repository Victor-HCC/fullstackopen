import React from 'react'

const Persons = ({ filter, filtered, persons }) => {
  return (
    <div>
      {(filtered.length > 0 ? 
          filtered.map(elem => <div key={elem.name}>{elem.name} {elem.number}</div>) : 
          filter ? 
            <span>No results</span> : 
            persons.map(person => <div key={person.name}>{person.name} {person.number}</div>))} 
    </div>
  )
}

export default Persons
