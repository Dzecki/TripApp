import React from 'react'

function TripItem({direction, hours, pass}) {
  return (
    <div className='flex flex-col pt-4 items-center text-white font-bold w-[170px] h-[150px] bg-gray-600 my-6 rounded-md hover:bg-opacity-90 transition-shadow shadow-xl cursor-pointer'>
        <h1 className='h-[33%] text-2xl'>{direction}</h1>
        <h2 className='h-[34%] text-lg'>{hours}</h2>
        <h1 className='h-[33%] text-xl'>PASS: {pass}</h1>
    </div>
  )
}

export default TripItem