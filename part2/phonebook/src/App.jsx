import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, SetNewNumber ] = useState('')
  const [ filtered, setFiltered ] = useState([])
  const [ filter, setFilter ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const exist = persons.find(person => person.name === newName)
    if(exist) {
      alert(`${newName} is already added to the phonebook`)
      return;
    }
    const newPersons = persons.concat({ name: newName, number: newNumber })
    setPersons(newPersons)
    setNewName('')
    SetNewNumber('')
  }

  const handleInputName = (e) => {
    setNewName(e.target.value)
  }

  const handleInputNumber = (e) => {
    SetNewNumber(e.target.value)
  }

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase().trim();
    if(value) {
      setFiltered(persons.filter(person => person.name.toLowerCase().includes(value)))
      setFilter(true)
    } else {
      setFiltered([])
      setFilter(false)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div>filter shown with <input onChange={handleFilter} /></div>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleInputName} value={newName} />
        </div>

        <div>
          number: <input onChange={handleInputNumber} value={newNumber} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {(filtered.length > 0 ? filtered.map(elem => <div key={elem.name}>{elem.name} {elem.number}</div>) : filter ? <span>No results</span> : persons.map(person => <div key={person.name}>{person.name} {person.number}</div>))} 
    </div>
  )
}

export default App