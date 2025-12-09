import { useState } from 'react'
import './App.css'
function App() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
function clearHandel(){
      setName('')
      setEmail('')
}
function nameHandel(e){
      setName(e.target.value)
}
function emailHandel(e){
     setEmail(e.target.value)
}

  return (
    <>
    <input type="text" value={name} onChange={nameHandel} placeholder='enter your name' />    
    <br /> <br />
    <input type="text" value={email} onChange={emailHandel} placeholder='enter your email' />    
     <br /> <br />
     <button onClick={clearHandel}>Clear</button>
     <br /> <br />
     <h1>{name}</h1> 
     <h1>{email}</h1>
    </>
  )
}

export default App
