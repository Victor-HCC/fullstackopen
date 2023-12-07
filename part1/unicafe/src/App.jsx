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
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  
  const [good, neutral, bad] = props.states;
  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positives = (good / total) * 100;

  return (
    <div>
      {(good || neutral || bad) ? (
        <div>
          <h2>Statistics</h2>
          <table>
            <tbody>
              <StatisticLine text='good' value={good} />
              <StatisticLine text='neutral' value={neutral} />
              <StatisticLine text='bad' value={bad} />
              <StatisticLine text='all' value={total.toFixed(1)} />
              <StatisticLine text='average' value={average.toFixed(1)} />
              <StatisticLine text='positive' value={`${positives.toFixed(1)}%`} />
            </tbody>
          </table>
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
