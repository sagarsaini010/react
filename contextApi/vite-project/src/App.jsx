import './App.css'
import React from 'react'
import A from './components/A'
import B from './components/B'
import { useMyContext } from './MyContextApi'
import { useEffect } from 'react'

const App = () => {
  const {count} = useMyContext();
  useEffect(()=>{
    console.log('re-render hua hai')
  },[count])
  return (
    <>
    <div className='bg-red-500 p-20'>
    <h1>App {count}</h1>
    <A/>
    <B/>
    </div>
    </>
  )
}

export default App

