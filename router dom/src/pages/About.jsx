import React from 'react'
import { Outlet } from 'react-router-dom'
const About = () => {
  return (
    <>
    <Outlet/>
    <div className='flex justify-center items-center text-5xl bg-black text-white h-[92vh]'>About</div>
    </>
  )
}

export default About