import React from 'react'
import { useMyContext } from '../MyContextApi'

const C = () => {
 const {count} = useMyContext();
  return (
    <div  className='bg-yellow-500 p-10'>C {count}</div>
  )
}

export default C