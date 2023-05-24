import React from 'react'

function PassengerItemList() {
  return (
    <div className='w-[205px] h-[200px] bg-[#252222] mx-3 border-[1px] border-gray-700 rounded-md bg-opacity-90'>
        <input className='font-semibold w-[100%] py-2 bg-[#725DF3] text-center' placeholder={"PASSENGER"}></input>  
        <ul className='list-disc list-inside m-4'>
            <li><input className='w-[140px] bg-transparent my-2 active outline-0 cursor-pointer'></input></li>
            <li><input className='w-[140px] bg-transparent my-2 active outline-0 cursor-pointer'></input></li>
            <li><input className='w-[140px] bg-transparent my-2 active outline-0 cursor-pointer'></input></li>
        </ul>
    </div> 
  )
}

export default PassengerItemList