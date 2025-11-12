import React from 'react'
import { FaFacebook,FaInstagramSquare,FaTwitter, FaYoutube,FaRegShareSquare  } from "react-icons/fa"
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";
const UserCard = ({data}) => {
  return (
    <div className='rounded-xl shadow-2xl tracking-widest overflow-hidden'>
        <div className='bg-blue-500 p-4 flex justify-center items-bottom h-25'>
          <img className='h-30 w-30 mt-8 object-cover  border-4 border-blue-500 rounded-full' src={data.image} alt="" />
        </div>
        <div className='w-80 flex flex-col items-center '>
        <h1 className='text-2xl mt-20 font-bold'>{data.name}</h1>
        <p className='mt-2'>{data.role}</p>
        <dir className='flex gap-8 mt-3'>
          <FaFacebook className='text-3xl' /> <FaInstagramSquare className='text-3xl'/> <FaTwitter className='text-3xl'/> <FaYoutube className='text-3xl'/>
        </dir>
        <div className='flex gap-4 mt-6'>
          <button className='px-4 py-2 bg-blue-500 text-white rounded-4xl'>Subscribe</button> <button className='px-4 py-2 bg-blue-500 text-white rounded-4xl'>Message</button>
        </div>
        <div className='flex gap-10 py-4'>
          <p className='flex items-center gap-1'><FiHeart /> {data.likes}</p>
          <p className='flex items-center gap-1'><FaRegComment /> {data.comments}</p>
          <p className='flex items-center gap-1'><FaRegShareSquare /> {data.shares}</p>
        </div>
        </div>
    </div>
  )
}

export default UserCard