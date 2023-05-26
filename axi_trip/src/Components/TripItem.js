import React, { useEffect, useState } from 'react'

function TripItem({ID, From, To, startDate, endDate, Color, Pass, deleteTrip}) {

  const [passengers, setPassengers] = useState([]);
  const [hideList, setHideList] = useState('0')
  

  useEffect (() => {
      if(passengers.length < Pass) {
        setPassengers([...passengers, passengers.length+1]);
      }
  });
  

  return (
    <div className='flex flex-col mx-5'>
      <div className='relative flex items-center text-white font-bold bg-[#252222] bg-opacity-70 w-[400px] h-[200px] rounded-md shadow-xl transition-all'>
          <div className='flex flex-col items-center justify-around] p-2 m-2'>
            <div style={{backgroundColor: Color}} className='bg-purple-600 w-[13px] h-[13px] rounded-full'></div>
            <div style={{backgroundColor: Color}} className='bg-purple-600 w-[13px] h-[13px] my-8 rounded-full'></div>
            <div style={{backgroundColor: Color}} className='bg-purple-600 w-[13px] h-[13px] rounded-full'></div>
            <button className='absolute top-1 right-1 rounded-full w-[17px] h-[17px] text-[10px] font-bold bg-red-500 hover:opacity-90' onClick={() => deleteTrip(ID)}>X</button>
            <button className='absolute top-7 right-1 rounded-full w-[17px] h-[17px] text-[10px] font-bold bg-blue-500 hover:opacity-90'>/</button>
            <button className='absolute top-13 right-1 rounded-full w-[17px] h-[17px] text-[10px] font-bold bg-green-500 hover:opacity-90' onClick={() => setHideList(hideList === '0' ? 'auto' : '0')}>0</button>
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

        <div className='flex flex-col w-[400px] text-white bg-[#252222] bg-opacity-70 overflow-hidden mt-2 rounded-md border-2' style={{borderColor: Color, height: hideList, transition: '0.5s'}}>
            {passengers.map((p) => 
              <div>
                <input className='text-sm p-2 m-2 border-r-2 w-[30%] font-semibold bg-transparent' placeholder={'Passenger ' + p} style={{borderColor: Color}}></input>
                <input placeholder='items...' className='w-[65%] bg-transparent p-2'></input>
              </div>
                                    
            )}
        </div>
      </div>
  )
}

export default TripItem