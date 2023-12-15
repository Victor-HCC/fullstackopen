import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, SetNewNumber ] = useState('')
  const [ filtered, setFiltered ] = useState([])
  const [ filter, setFilter ] = useState(false)
  const [ filterWord, setFilterWord ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3002/persons')
      .then(res => setPersons(res.data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const exist = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
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

  useEffect(() => {
    if(filterWord.length > 0) {
      setFiltered(persons.filter(person => person.name.toLowerCase().includes(filterWord)))
      setFilter(true)
    } else {
      setFiltered([])
      setFilter(false)
    }
  }, [filterWord])

  const handleFilter2 = (e) => {
    const value = e.target.value.toLowerCase().trim()
    setFilterWord(value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handler={handleFilter2} />
      
      <h3>Add a new</h3>
      <Form submitHandler={handleSubmit} inputNameHandler={handleInputName} inputNumberHandler={handleInputNumber} name={newName} number={newNumber} />

      <h2>Numbers</h2>
      <Persons filter={filter} filtered={filtered} persons={persons} />
    </div>
  )
}

export default App