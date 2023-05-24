import React from 'react'

function TripItem({ID, From, To, startDate, endDate, Color, Pass, deleteTrip}) {
  return (
    <div className='relative flex items-center  text-white font-bold bg-[#252222] bg-opacity-70 w-[400px] m-4 h-[200px] rounded-md shadow-xl transition-all'>
        <div className='flex flex-col items-center justify-around] p-2 m-2'>
          <div style={{backgroundColor: Color}} className='bg-purple-600 w-[13px] h-[13px] rounded-full'></div>
          <div style={{backgroundColor: Color}} className='bg-purple-600 w-[13px] h-[13px] my-8 rounded-full'></div>
          <div style={{backgroundColor: Color}} className='bg-purple-600 w-[13px] h-[13px] rounded-full'></div>
          <button className='absolute top-1 right-1 rounded-full w-[17px] h-[17px] text-[10px] font-bold bg-red-500 hover:opacity-90 transition-color' onClick={() => deleteTrip(ID)}>X</button>
          <button className='absolute top-7 right-1 rounded-full w-[17px] h-[17px] text-[10px] font-bold bg-blue-500 hover:opacity-90 transition-color'>/</button>
        </div>
       
        <div> 
          <div className='relative flex flex-col items-center justify-center w-[150px] my-2 h-[75px] bg-[#252222] text-white font-bold text-center rounded-2xl shadow-lg'>
            <label className='text-[9px] absolute top-2 left-2'>FROM</label>
            <h2>{From}</h2>
          </div>

          <div className='relative flex flex-col items-center justify-center w-[150px] mb-2 h-[75px] bg-[#252222] text-white font-bold text-center rounded-2xl shadow-lg'>
            <label className='text-[9px] absolute top-2 left-2'>TO</label>
            <h2>{To}</h2>
           </div>
          </div>

          <div className='mx-4'>
            <div className='relative flex justify-center items-center w-[150px] h-[75px] bg-[#252222] my-2 font-semibold text-white rounded-2xl shadow-lg'>
              <label className='text-[9px] absolute top-2 left-2'>START</label>
              <h2 className='mt-2'>{startDate}</h2>
            </div>
            <div className='relative flex justify-center items-center w-[150px] h-[75px] bg-[#252222] mb-2 text-white rounded-2xl shadow-lg'>
              <label className='text-[9px] absolute top-2 left-2'>END</label>
              <h2 className='mt-2'>{endDate}</h2>
            </div>
          </div>
      </div>
  )
}

export default TripItem