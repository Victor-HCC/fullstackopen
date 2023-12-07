import './App.css'
import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handler}>{props.feedback}</button>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      {props.feedback} {props.count}
    </div>
  )
}

const Statistics = (props) => {
  
  const [good, neutral, bad] = props.states;
  const total = good + bad + neutral;
  const average = (good - bad) / total;

  return (
    <div>
      {(good || neutral || bad) ? (
        <div>
          <h2>Statistics</h2>
          <StatisticLine feedback='good' count={good} />
          <StatisticLine feedback='neutral' count={neutral} />
          <StatisticLine feedback='bad' count={bad} />
          <span>all {total}</span><br />
          <span>average {average}</span><br />
        <span>positive {(good / total) * 100}%</span>
        </div>
      ) : (
        <div>
          <h2>Statistics</h2>
          <div>No feedback given</div>
        </div>
        )}
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
      <h2>Give feedback</h2>
      <div className='buttons'>
        <Button feedback='good' handler={buttonGoodHandler} />
        <Button feedback='neutral' handler={buttonNeutralHandler} />
        <Button feedback='bad' handler={buttonBadHandler} />
      </div>
      
      <Statistics states={[good, neutral, bad]} />
    </div>
  )
}

export default App
