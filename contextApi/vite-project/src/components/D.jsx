import React from 'react'
import { useMyContext } from '../MyContextApi'

const D = () => {
    const {count } = useMyContext();

  return (
    <div  className='bg-yellow-900 p-10'>D {count}</div>
  )
}

export default D