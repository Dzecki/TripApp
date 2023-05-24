import React, { useState } from 'react'
import { CirclePicker } from 'react-color';
import TripItem from './Components/TripItem';

function App() {
  const [tripsList, setTripsList] = useState([]);
  const [trip, setTrip] = useState({ID: tripsList.length, From: '', To: '', dateStart: '', dateEnd: '', Color: '#3f51b5', Pass: 0});

  const handleChange = (e) => {
    const value = e.target.value;
    setTrip({
      ...trip,[e.target.name]: value
    })
  }

  const addTrip = () => {
    setTripsList([...tripsList, trip]);
    setTrip({...trip, ID: tripsList.length+1});
  }

  const deleteTrip = (id) => {  
    const newList = tripsList.filter((trip) => id !== trip.ID);
    setTripsList(newList);
  } 

  const tripsDisplay = tripsList.map((trip) => (
    <TripItem {...trip} deleteTrip={deleteTrip}></TripItem>
  ));


  return (
    <div className='flex justify-center w-[100vw] h-[100vh] bg-[#555661] border-2 border-blue-500'>
      <div className='flex justify-center items-center ml-24 w-[90%] border-2 border-red-500'>

          {/* Main window displaying data contained in trips objects */}
          
          <div className='flex justify-center items-center border-2 border-green-500 w-[100%]'>
            {tripsDisplay}
          </div>
        

          {/* Menu for creating trips objects */}

          <form id='createMenu' className='absolute bottom-2 flex h-[250px] bg-[#252222] pr-4 bg-opacity-70 mb-4 mt-4 rounded-md overflow-hidden'>
              <CirclePicker className='overflow-hidden bg-[#252222] bg-opacity-70 pt-2 pl-6' color={trip.Color} 
                onChange={(color) => {
                  setTrip({...trip, Color: color.hex});
                }}
              />
              <div style={{backgroundColor: trip.Color}} className='w-[40px] border-r-[1px] border-gray-700 transition-colors'></div>

              <div className='relative flex flex-col text-white justify-center items-center w-[180px] h-[180px] bg-[#252222] my-5 mt-8 mr-2 ml-10 rounded-md'>
                <label className='absolute top-2 text-[12px] font-bold'>START DATE</label>
                <input className='bg-transparent font-bold text-2xl w-[160px] outline-none' type='date' name='startDate' onChange={handleChange}></input>  
              </div> 
              <div className='m-5 mt-8'>
                <div className='w-[180px] h-[80px] bg-[#252222] rounded-md text-white'>
                  <label className='text-[12px] font-semibold ml-2'>FROM</label>
                  <input className='w-[90%]  outline-none bg-transparent font-bold ml-2 mt-3 border-b border-white' name='From' onChange={handleChange}></input>
                </div>
                <div className='w-[180px] h-[80px] bg-[#252222] text-white mt-5 rounded-md'>
                  <label className='text-[12px] font-semibold ml-2'>TO</label>
                  <input className='w-[90%]  outline-none bg-transparent font-bold ml-2 mt-3 border-b border-white' name='To' onChange={handleChange}></input>
                </div>
              </div>
              <div className='relative flex flex-col justify-center items-center text-white w-[180px] h-[180px] bg-[#252222] my-5 mt-8 ml-2 mr-5 rounded-md'>
                <label className='absolute top-2 text-[12px] font-bold'>END DATE</label>
                <input className='bg-transparent font-bold text-2xl w-[160px] outline-none' type='date' name='endDate' onChange={handleChange}></input>   
              </div> 
              <div className='flex h-[180px] mt-8 flex-col justify-between items-center w-[80px]'>
                <div className='flex flex-col justify-center items-center w-[100%] h-[120px] text-center bg-[#252222] text-white rounded-md'>
                  <label className='text-[11px] font-semibold mb-5'>N.O. PASSENGERS</label>
                  <input type='number' placeholder='1' min={1} max={6} name='Pass' onChange={handleChange} className='bg-transparent w-[50%] outline-none ml-7'></input>
                </div>
                <button className='bg-[#252222] rounded-md font-bold p-2 text-white w-[100%] hover:opacity-95 transition-all' onClick={addTrip} type='reset' >ADD</button>
              </div>
          </form>
        </div>
      </div>
  )
}

export default App