import React from 'react'
import { TiThMenu } from "react-icons/ti";
const Navbar = ({setDisplayValue}) => {
    function clickHandler(){
        setDisplayValue(0)
    }
  return (
    <div className='flex justify-between py-4 px-8'>
        <div>
            <h1 className='text-5xl'>LOGO</h1>
        </div>
        <div className='text-xl flex gap-12 right-child'>
            <div >Home</div>
            <div>Contact</div>
             <div>About</div>
            <div >Blog</div>
        </div>
        <div className='right-icon'>
            <TiThMenu onClick={clickHandler} className='text-4xl ' />
        </div>
        
    </div>
  )
}

export default Navbar