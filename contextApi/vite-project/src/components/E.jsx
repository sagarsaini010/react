import React from 'react'
import { useMyContext } from '../MyContextApi';
const E = () => {
    const {setCount} = useMyContext();
  return (
    <div className='bg-pink-900 p-10'>E
    <button onClick={()=>{
        setCount(prev=> prev+1)
    }}>Click</button>
    </div>
  )
}

export default E