import React from 'react'

function PassengerItemList() {
  return (
    <div className='w-[205px] h-[200px] bg-[#252222] mx-3 border-[1px] border-gray-700 rounded-md bg-opacity-90'>
        <h1 className='font-semibold py-2 bg-[#725DF3] text-center'>PASSENGER 4</h1>  
        <ul className='list-disc list-inside m-4'>
            <li><input className='w-[140px] bg-transparent my-2 active outline-0 cursor-pointer'></input></li>
            <li><input className='w-[140px] bg-transparent my-2 active outline-0 cursor-pointer'></input></li>
            <li><input className='w-[140px] bg-transparent my-2 active outline-0 cursor-pointer'></input></li>
        </ul>
    </div> 
  )
}

export default PassengerItemList