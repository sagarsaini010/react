import React from 'react'
import { useMyContext } from '../MyContextApi'

const F = () => {
   const {count } = useMyContext();
  return (
    <div className='bg-pink-500 p-10'>F {count}</div>
  )
}

export default F