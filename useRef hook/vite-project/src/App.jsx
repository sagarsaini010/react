import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name : '',
    email : '',
    phoneNumber: ''
  });
  console.log(data)

const resetData = () =>{
  setData({
     name : '',
    email : '',
    phoneNumber: ''
  })
}

const inputHandler = (e)=>{
const {name,value} = e.target
setData((prev)=>({...prev,[name]:value}))
}

  return (
    <div className="flex justify-center items-center flex-col gap-8 h-[100vh] bg-gray-700 text-white">
      <input
        type="text"
        name="name"
        value={data.name}
        className="border-amber-300 border-2 rounded-2xl px-4 py-2"
        placeholder="Enter your Name..."
        onChange={inputHandler}
      />
      <input
        type="text"
        name="email"
        value={data.email}
        className="border-amber-300 border-2 rounded-2xl px-4 py-2"
        placeholder="Enter your Name..."
        onChange={inputHandler}
      />
      <input
        type="text"
        name="phoneNumber"
        value={data.phoneNumber}
        className="border-amber-300 border-2 rounded-2xl px-4 py-2"
        placeholder="Enter your Name..."
        onChange={inputHandler}
      />
      <button
        className="bg-blue-500 rounded-4xl px-4 py-2"
        onClick={resetData}
      >
        Clear
      </button>
      <h1 className="text-4xl">{data.name}</h1>
      <h1 className="text-4xl">{data.email}</h1>
      <h1 className="text-4xl">{data.phoneNumber}</h1>
    </div>
  );
};

export default App;
