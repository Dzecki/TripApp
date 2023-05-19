import React from 'react'

function TripItem({ID, From, To, startDate, endDate, Color, Pass, deleteTrip}) {
  return (
    <div className='relative flex flex-col items-center text-white font-bold w-[170px] h-[150px] bg-[#252222] my-6 rounded-md transition-shadow shadow-xl cursor-pointer transition-all'>
        <div className='flex items-center justify-around h-[10%] p-4 w-[100%] m-1'>
          <div style={{backgroundColor: Color}} className='bg-purple-600 w-[13px] h-[13px] rounded-full'></div>
          <button className='rounded-full w-[20px] h-[20px] text-[11px] font-bold bg-red-500 hover:bg-red-600 transition-color' onClick={() => deleteTrip(ID)}>X</button>
          <div style={{backgroundColor: Color}} className='bg-purple-600 w-[13px] h-[13px] rounded-full'></div>
        </div>
        <h1 className='h-[30%] text-2xl'>{From.charAt(0).toUpperCase()} - {To.charAt(0).toUpperCase()}</h1>
        <h1 className='h-[30%] text-xl'>N.O.P : {Pass}</h1>
        <h1 className='h-[30%] text-[13px]'>{startDate} / {endDate}</h1>
    </div>
  )
}

export default TripItem