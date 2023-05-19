import React, { useState } from 'react'
import { CirclePicker } from 'react-color';
import TripItem from './Components/TripItem';
import PassengerItemList from './Components/PassengerItemList';

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
    setTrip(false);
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
    <div className='flex justify-center w-[100vw] h-[100vh] bg-[#252222]'>
      <div className='flex justify-center ml-24 w-[75%]'>

        <div className='w-[1000px] flex flex-col justify-center my-8'>

          {/* Main window displaying data contained in trips objects */}
          
          <div id='main' className='flex flex-col bg-[#6D6F87] h-[700px] mt-4 mb-4 rounded-md'>
            <div id='tripMenu' className='flex'>
              <div className='w-[290px] h-[300px] bg-[#252222] text-white font-bold text-center rounded-2xl my-12 ml-12 shadow-lg'>
                Siema
              </div>
              <div className='w-[290px] h-[300px] bg-[#252222] text-white font-bold text-center rounded-2xl m-12 shadow-lg'></div>
              <div>
                <div className='w-[225px] h-[145px] bg-[#252222] mt-12 mb-2 rounded-2xl shadow-lg'></div>
                <div className='w-[225px] h-[145px] bg-[#252222] mb-2 rounded-2xl shadow-lg'></div>
              </div>
            </div>

            {/* <div id='tripNotes' className='flex ml-12 mb-4 text-white'>
              <PassengerItemList/>
              <PassengerItemList/>
              <PassengerItemList/>
              <PassengerItemList/>
            </div> */}
          </div>

          {/* Menu for creating trips objects */}

          <form id='createMenu' className='flex relative h-[250px] bg-[#6D6F87] mb-4 mt-4 rounded-md overflow-hidden'>
              <CirclePicker className='overflow-hidden bg-[#252222] bg-opacity-90 pt-2 pl-6' color={trip.Color} 
                onChange={(color) => {
                  setTrip({...trip, Color: color.hex});
                }}
              />
              <div style={{backgroundColor: trip.Color}} className='w-[40px] border-r-[1px] border-gray-700 transition-colors'></div>

              <div className='relative flex flex-col text-white justify-center items-center w-[180px] h-[180px] bg-[#252222] my-5 mr-2 ml-10 rounded-md'>
                <label className='absolute top-2 text-[12px] font-bold'>START DATE</label>
                <input className='bg-transparent font-bold text-2xl w-[160px] outline-none' type='date' name='startDate' onChange={handleChange}></input>  
              </div> 
              <div className='m-5'>
                <div className='w-[180px] h-[80px] bg-[#252222] rounded-md text-white'>
                  <label className='text-[12px] font-semibold ml-2'>FROM</label>
                  <input className='w-[90%]  outline-none bg-transparent font-bold ml-2 mt-3 border-b border-white' name='From' onChange={handleChange}></input>
                </div>
                <div className='w-[180px] h-[80px] bg-[#252222] text-white mt-5 rounded-md'>
                  <label className='text-[12px] font-semibold ml-2'>TO</label>
                  <input className='w-[90%]  outline-none bg-transparent font-bold ml-2 mt-3 border-b border-white' name='To' onChange={handleChange}></input>
                </div>
              </div>
              <div className='relative flex flex-col justify-center items-center text-white w-[180px] h-[180px] bg-[#252222] my-5 ml-2 mr-5 rounded-md'>
                <label className='absolute top-2 text-[12px] font-bold'>END DATE</label>
                <input className='bg-transparent font-bold text-2xl w-[160px] outline-none' type='date' name='endDate' onChange={handleChange}></input>   
              </div> 
              <div className='flex h-[180px] mt-5 flex-col justify-between items-center mr-2 w-[80px]'>
                <div className='flex flex-col justify-center items-center w-[100%] h-[120px] text-center bg-[#252222] text-white rounded-md'>
                  <label className='text-[11px] font-semibold mb-5'>N.O. PASSENGERS</label>
                  <input type='number' placeholder='1' min={1} max={6} name='Pass' onChange={handleChange} className='bg-transparent w-[50%] outline-none ml-7'></input>
                </div>
                <button className='bg-[#252222] rounded-md font-bold p-2 text-white w-[100%] hover:opacity-95 transition-all' onClick={addTrip} type='reset' >ADD</button>
              </div>
          </form>
        </div>

        {/* Side menu with trips items displaying their content */}

        <div id='sideMenu' className='flex flex-col items-center justify-center self-center w-[220px] h-[865px] mx-12 my-8 rounded-md bg-[#6D6F87] overflow-scroll scrollbar-hide'>
          {tripsDisplay}
        </div>
      </div>
    </div>
  )
}

export default App