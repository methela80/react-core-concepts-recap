import { useState } from 'react'
import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Core Concepts Recap</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event handler</li>
        <li>state</li>
        <li>load data</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App
