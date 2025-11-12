import React from 'react'

const Popup = ({setRenderValue, value}) => {
    
function handleClick(){
    setRenderValue('')
}

  return (
    <>
    <div className='h-screen w-screen bg-black absolute top-0 left-0 z-10'>

        <button onClick={handleClick} className='absolute top-8 right-8'>❌</button>

        <div className='h-100 w-200 bg-gray-800 absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rounded-2xl flex flex-col items-center justify-center gap-8'>
        <h2 className='text-4xl'>⚠️ {value.charAt(0).toUpperCase() + value.slice(1)}</h2>
        <p className='text-2xl'>Are you sure want to {value} this</p>
        <div>
        <div className='bg-red-500 inline px-4 py-2 rounded'>No</div> <div className='bg-green-500 inline px-4 py-2 rounded'>Yes</div>
        </div>
        </div>

    </div>
    </>
  )
}

export default Popup