import React, {useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const config= {
      url:'https://jsonplaceholder.typicode.com/todos'
    }
  const fetchData = async() =>{
  // const response =  await fetch('https://jsonplaceholder.typicode.com/todos')
  // const resolveData = await response.json()
  // console.log(resolveData)
  // setData(resolveData)
  // const data = await  axios.get('https://jsonplaceholder.typicode.com/todos')
  const data1 = await axios(config)
  setData(data1.data)
  }


  return (
    <div className='bg-gray-500 text-white'>
      
      <button onClick={fetchData}>fetch data</button>
           {data.map(user => (
        <div key={user.id}>
          <p>Id: {user.id}</p>
          <p>Title: {user.title}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default App