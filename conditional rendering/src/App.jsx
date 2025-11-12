import { useState } from 'react'
import './App.css'
import Popup from './components/Popup'
function App() {
 const [renderValue, setRenderValue] = useState('')  

function clickHandlerD(){
  setRenderValue('delete')
}
function clickHandlerE(){
  setRenderValue('edit')
}

  if(renderValue === 'delete'){return (
    <>
    <Popup setRenderValue={setRenderValue} value={'delete'} /> 
    </>
  )}
  if(renderValue === 'edit'){return (
    <>
    <Popup setRenderValue={setRenderValue} value={'edit'} /> 
    </>
  )}
  else{
    return (
      <>
      <div className='flex gap-4'>
      <button onClick={clickHandlerD}>Delete</button>
      <button onClick={clickHandlerE}>Edit</button>
      </div>
      </>
    )
  }
}

export default App
