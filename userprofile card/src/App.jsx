import React from 'react'
import UserCard from './components/UserCard'
const App = () => {
  let  userData = [
  {
    "name": "CodingLab",
    "role": "YouTube & Blogger",
    "image": "https://i.pinimg.com/736x/e8/e6/41/e8e64141f4c0ae39c32f9701ccea9a2e.jpg",
    "likes": "60.4k",
    "comments": "20k",
    "shares": "12.4k"
  },
  {
    "name": "DesignWithMe",
    "role": "UI/UX Mentor",
    "image": "https://i.pinimg.com/1200x/cb/f8/3d/cbf83da3300e950728f01841055c4a96.jpg",
    "likes": "45.2k",
    "comments": "18k",
    "shares": "9.1k"
  },
  {
    "name": "TechTinker",
    "role": "Frontend Developer",
    "image": "https://i.pinimg.com/1200x/66/f8/d7/66f8d71eba24ce4d70e2b332d26d4bbc.jpg",
    "likes": "38.7k",
    "comments": "12.3k",
    "shares": "7.8k"
  },
  {
    "name": "PixelCraft",
    "role": "Digital Artist",
    "image": "https://i.pinimg.com/736x/b9/a2/5d/b9a25d70e9647b487a3b60da3f710374.jpg",
    "likes": "72.1k",
    "comments": "25.4k",
    "shares": "14.6k"
  },
  {
    "name": "CodeCanvas",
    "role": "React Specialist",
    "image": "https://i.pinimg.com/736x/d0/af/a6/d0afa616f907bb61c11f3b0432aebcb7.jpg",
    "likes": "51.9k",
    "comments": "19.8k",
    "shares": "10.2k"
  },
  {
    "name": "SketchSphere",
    "role": "Illustrator",
    "image": "https://i.pinimg.com/736x/5a/5a/5a/5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a.jpg",
    "likes": "66.3k",
    "comments": "22.7k",
    "shares": "13.5k"
  },
  {
    "name": "ByteBlogger",
    "role": "Tech Reviewer",
    "image": "https://i.pinimg.com/736x/6b/6b/6b/6b6b6b6b6b6b6b6b6b6b6b6b6b6b6b6b.jpg",
    "likes": "48.6k",
    "comments": "17.2k",
    "shares": "9.9k"
  },
  {
    "name": "MotionMind",
    "role": "Animator",
    "image": "https://i.pinimg.com/736x/7c/7c/7c/7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c.jpg",
    "likes": "59.8k",
    "comments": "21.1k",
    "shares": "11.7k"
  },
  {
    "name": "CodeCrush",
    "role": "JavaScript Educator",
    "image": "https://i.pinimg.com/736x/8d/8d/8d/8d8d8d8d8d8d8d8d8d8d8d8d8d8d8d8d.jpg",
    "likes": "43.5k",
    "comments": "15.9k",
    "shares": "8.3k"
  },
  {
    "name": "GridGuru",
    "role": "CSS Magician",
    "image": "https://i.pinimg.com/736x/9e/9e/9e/9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e.jpg",
    "likes": "36.2k",
    "comments": "13.4k",
    "shares": "6.7k"
  },
  {
    "name": "DevDazzle",
    "role": "Full Stack Dev",
    "image": "https://i.pinimg.com/736x/aa/aa/aa/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg",
    "likes": "54.7k",
    "comments": "20.3k",
    "shares": "12.1k"
  },
  {
    "name": "CodeMuse",
    "role": "Frontend Designer",
    "image": "https://i.pinimg.com/736x/bb/bb/bb/bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.jpg",
    "likes": "41.8k",
    "comments": "16.5k",
    "shares": "9.4k"
  },
  {
    "name": "LogicLoom",
    "role": "Problem Solver",
    "image": "https://i.pinimg.com/736x/cc/cc/cc/cccccccccccccccccccccccccccccccc.jpg",
    "likes": "39.9k",
    "comments": "14.2k",
    "shares": "7.6k"
  },
  {
    "name": "ReactRealm",
    "role": "React Dev",
    "image": "https://i.pinimg.com/736x/dd/dd/dd/dddddddddddddddddddddddddddddddd.jpg",
    "likes": "58.3k",
    "comments": "22.1k",
    "shares": "11.9k"
  },
  {
    "name": "TailwindTales",
    "role": "CSS Framework Fan",
    "image": "https://i.pinimg.com/736x/ee/ee/ee/eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.jpg",
    "likes": "47.6k",
    "comments": "18.4k",
    "shares": "10.5k"
  },
  {
    "name": "NodeNexus",
    "role": "Backend Builder",
    "image": "https://i.pinimg.com/736x/ff/ff/ff/ffffffffffffffffffffffffffffffff.jpg",
    "likes": "52.9k",
    "comments": "19.7k",
    "shares": "11.3k"
  },
  {
    "name": "UXUnfold",
    "role": "UX Strategist",
    "image": "https://i.pinimg.com/736x/11/11/11/11111111111111111111111111111111.jpg",
    "likes": "63.4k",
    "comments": "23.6k",
    "shares": "13.9k"
  },
  {
    "name": "CloudCrafter",
    "role": "DevOps Engineer",
    "image": "https://i.pinimg.com/736x/22/22/22/22222222222222222222222222222222.jpg",
    "likes": "49.1k",
    "comments": "17.8k",
    "shares": "10.8k"
  },
  {
    "name": "ScriptSavvy",
    "role": "TypeScript Trainer",
    "image": "https://i.pinimg.com/736x/33/33/33/33333333333333333333333333333333.jpg",
    "likes": "46.7k",
    "comments": "16.9k",
    "shares": "9.7k"
  },
  {
    "name": "DesignDock",
    "role": "Creative Director",
    "image": "https://i.pinimg.com/736x/44/44/44/44444444444444444444444444444444.jpg",
    "likes": "70.2k",
    "comments": "24.8k",
    "shares": "14.3k"
  }
]
  return (
    <div className='flex flex-wrap gap-4  justify-center p-4'>
       {userData.map((data)=>{
        return <UserCard data={data} />
       })}
    </div>
  )
}

export default App
