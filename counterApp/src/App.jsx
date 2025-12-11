import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>Counter App</h1>
    <h3>Current Count:{count}</h3>
    <button onClick={()=>{setCount(count+1)}}>➕Increment</button> <button onClick={()=>{setCount(count-1)}}>➖Decrement</button> <button onClick={()=>{setCount(0)}}>🔁Reset</button>
    </>
  )
}

export default App