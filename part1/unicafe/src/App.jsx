import './App.css'
import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handler}>{props.feedback}</button>
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
      {props.feedback} {props.count}
    </div>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const buttonGoodHandler = () => {
    const cont = good + 1;
    setGood(cont)
  }

  const buttonNeutralHandler = () => {
    const cont = neutral + 1;
    setNeutral(cont)
  }
  const buttonBadHandler = () => {
    const cont = bad + 1;
    setBad(cont)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div className='buttons'>
        <Button feedback='good' handler={buttonGoodHandler} />
        <Button feedback='neutral' handler={buttonNeutralHandler} />
        <Button feedback='bad' handler={buttonBadHandler} />
      </div>
      
      <h2>Statistics</h2>
      <Statistics feedback='good' count={good} />
      <Statistics feedback='neutral' count={neutral} />
      <Statistics feedback='bad' count={bad} />
    </div>
  )
}

export default App
