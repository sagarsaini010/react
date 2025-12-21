import { useEffect } from 'react';
import './App.css'
import useMyStore from './store'

function App() {
  // const { count, increment, capitalizeName } = useMyStore();
  const count = useMyStore(state=> state.count)
  const name = useMyStore(state=> state.name)
  const increment = useMyStore(state=> state.increment)
  const capitalizeName = useMyStore(state=> state.capitalizeName)


   useEffect(()=>{
    console.log("re render hua kya", count)
   })

  return (
    <>
     <h1>{name}</h1>
    <p>{count}</p>
     <div className='bg-red-500 text-4xl p-2 m-0'>Hello</div>
     <button onClick={increment}>Click me</button>
     <button onClick={capitalizeName}>name change</button>
    </>
  )
}

export default App
