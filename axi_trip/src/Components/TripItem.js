import React from 'react'

function TripItem({direction, hours, pass, color}) {
  return (
    <div className='flex flex-col items-center text-white font-bold w-[170px] h-[150px] bg-[#252222] my-6 rounded-md hover:bg-opacity-90 transition-shadow shadow-xl cursor-pointer transition-all'>
        <div className='flex items-center justify-around h-[10%] p-4 w-[100%] m-1'>
          <div style={{backgroundColor: color}} className='bg-purple-600 w-[13px] h-[13px] rounded-full'></div>
          <div style={{backgroundColor: color}} className='bg-purple-600 w-[13px] h-[13px] rounded-full'></div>
          <div style={{backgroundColor: color}} className='bg-purple-600 w-[13px] h-[13px] rounded-full'></div>
          <div style={{backgroundColor: color}} className='bg-purple-600 w-[13px] h-[13px] rounded-full'></div>
        </div>
        <h1 className='h-[30%] text-2xl'>{direction}</h1>
        <h2 className='h-[30%] text-lg'>{hours}</h2>
        <h1 className='h-[30%] text-xl'>PASS: {pass}</h1>
    </div>
  )
}

export default TripItem