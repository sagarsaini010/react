import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  function openSidebar() {
    setIsOpen(true)
  }

  function closeSidebar() {
    setIsOpen(false)
  }

  return (
    <>
      <div className='h-screen w-screen bg-gray-900 text-white overflow-hidden relative'>
        <Navbar setDisplayValue={openSidebar} />

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 z-20 h-full w-2/3 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            onClick={closeSidebar}
            className='absolute z-40 top-4 right-4 text-2xl'
          >
            ❌
          </button>
          <div className='text-2xl pt-10 flex flex-col gap-8 px-4'>
            <div>Home</div>
            <div>Contact</div>
            <div>About</div>
            <div>Blog</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
