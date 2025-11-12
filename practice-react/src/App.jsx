import Navebar from './components/Navebar.jsx'
import React from 'react'
const App = () => {
  return (
    <>
    <Navebar/>
      <div>
      {React.createElement('h1',null,'Hello bhai kesa hai')}
          
   </div>   
 { React.createElement('h1',{class:'her',style:{color:'red',fontSize:'120px'}},'hello')}
 </> )
}

export default App