import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import DetailCountry from './components/DetailCountry'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ searchData, setSearchData]  = useState([])
  const [ selectedCountry, setSelectedCountry ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => setCountries(res.data))
  }, [])

  const findHandler = (e) => {
    const value = e.target.value.toLowerCase().trim();
    if(value) {
      setSelectedCountry('')
      const data = countries.filter(country => country.name.common.toLowerCase().includes(value))
      setSearchData(data)
    } else {
      setSearchData([])
    }
  }

  const buttonHandler = (data) => {
    setSelectedCountry(data)
  }

  return (
    <>
      <div>
        find countries <input onChange={findHandler} />
      </div>
      {selectedCountry ? <DetailCountry country={selectedCountry} /> : searchData.length > 10 
        ? <div>Too many matches, specify another filter</div> 
        : searchData.length > 1 && searchData.length <= 10 
          ? searchData.map(elem => {
              return (
                <div key={elem.cca3}>
                  {elem.name.common} <button onClick={() => buttonHandler(elem)}>show</button>
                </div>
              )
            }) 
          : searchData.length === 1 && <DetailCountry country={searchData[0]} />}
    </>
  )
}

export default App
