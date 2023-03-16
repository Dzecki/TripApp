import React, { useState } from 'react'
import { CirclePicker } from 'react-color';
import Sketch from './Images/Sketch.png';
import Sketch2 from './Images/Sketch2.png';
import TripItem from './Components/TripItem';
import PassengerItemList from './Components/PassengerItemList';

function App() {
  const [pickedColor, setPickedColor] = useState("#3f51b5");
  const [opacValue, setOpacValue] = useState(0);

  return (
    <div className='flex w-[100vw] h-[100vh] bg-[#252222]'>
      <div className='flex justify-center ml-24 w-[75%]'>

        <div className='w-[1000px] flex flex-col justify-center my-8'>

          {/* Main window displaying data contained in trips objects */}
          
          <div id='main' className='flex flex-col bg-[#6D6F87] h-[700px] mt-4 mb-4 rounded-md'>
            <div id='tripMenu' className='flex'>
              <div className='w-[290px] h-[300px] bg-[#252222] text-white font-bold text-center rounded-2xl my-12 ml-12 shadow-lg'></div>
              <div className='w-[290px] h-[300px] bg-[#252222] text-white font-bold text-center rounded-2xl m-12 shadow-lg'></div>
              <div>
                <div className='w-[225px] h-[145px] bg-[#252222] mt-12 mb-2 rounded-2xl shadow-lg'></div>
                <div className='w-[225px] h-[145px] bg-[#252222] mb-2 rounded-2xl shadow-lg'></div>
              </div>
            </div>

            <div id='tripNotes' className='flex ml-12 mb-4 text-white'>
              <PassengerItemList/>
              <PassengerItemList/>
              <PassengerItemList/>
              <PassengerItemList/>
            </div>
          </div>  

          {/* Menu for creating trips objects */}

          <div id='createMenu' className='flex relative h-[250px] bg-[#6D6F87] mb-4 mt-4 rounded-md overflow-hidden'>

              <button className='absolute top-2 right-2 z-20' onClick={() => setOpacValue(opacValue ? 0:100)}>X</button>
              <div className='absolute w-[100%] h-[50%] bg-gray-800 transition-opacity z-10 top-0' style={{opacity: opacValue}}></div>

              <CirclePicker className='overflow-hidden bg-[#252222] bg-opacity-90 pt-2 pl-6'
                color={pickedColor}
                onChange={(color) => {
                  setPickedColor(color.hex);
                }}
              />
              <div style={{backgroundColor: pickedColor}} className='w-[50px] border-r-[1px] border-gray-700 transition-colors'></div>

              <div className='w-[180px] h-[180px] bg-[#252222] m-5 ml-12 rounded-md bg-opacity-90 '></div> 
              <div className='m-5'>
                <div className='w-[180px] h-[80px] bg-[#252222] rounded-md bg-opacity-90'></div>
                <div className='w-[180px] h-[80px] bg-[#252222] mt-5 rounded-md bg-opacity-90'></div>
              </div>
              <div className='w-[180px] h-[180px] bg-[#252222] m-5 rounded-md bg-opacity-90'></div> 
          </div>
        </div>

        {/* Side menu with trips items displaying their content */}

        <div id='sideMenu' className='flex flex-col items-center justify-center self-center w-[220px] h-[865px] mx-12 my-8 rounded-md bg-[#6D6F87]'>
          <TripItem pass={4} direction={"W - L"} hours={"12:45 - 14:05"}></TripItem>
        </div>
      </div>

      <div className='relative flex items-end justify-end mb-12 mr-24 w-[20%]'>
        <h1 style={{fontFamily: 'Sansation, sans-serif'}} className='absolute text-white text-[72px] top-0 right-2'>A X I</h1>
        <img src={Sketch2}></img>
        <img src={Sketch} className="mx-2 mt-8 h-[85%]"></img>
      </div> 
    </div>
  )
}

export default App