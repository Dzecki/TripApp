import React, { useState } from 'react'
import { CirclePicker } from 'react-color';
import TripItem from './Components/TripItem';
import PassengerItemList from './Components/PassengerItemList';

function App() {
  const [pickedColor, setPickedColor] = useState("#3f51b5");
  const [opacValue, setOpacValue] = useState(0);

  return (
    <div className='flex justify-center w-[100vw] h-[100vh] bg-[#252222]'>
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

            {/* <div id='tripNotes' className='flex ml-12 mb-4 text-white'>
              <PassengerItemList/>
              <PassengerItemList/>
              <PassengerItemList/>
              <PassengerItemList/>
            </div> */}
          </div>

          {/* Menu for creating trips objects */}

          <div id='createMenu' className='flex relative h-[250px] bg-[#6D6F87] mb-4 mt-4 rounded-md overflow-hidden'>
              <CirclePicker className='overflow-hidden bg-[#252222] bg-opacity-90 pt-2 pl-6'
                color={pickedColor}
                onChange={(color) => {
                  setPickedColor(color.hex);
                }}
              />
              <div style={{backgroundColor: pickedColor}} className='w-[40px] border-r-[1px] border-gray-700 transition-colors'></div>

              <div className='w-[180px] h-[180px] bg-[#252222] m-5 ml-12 rounded-md'></div> 
              <div className='m-5'>
                <div className='w-[180px] h-[80px] bg-[#252222] rounded-md'></div>
                <div className='w-[180px] h-[80px] bg-[#252222] mt-5 rounded-md'></div>
              </div>
              <div className='w-[180px] h-[180px] bg-[#252222] m-5 rounded-md'></div> 
          </div>
        </div>

        {/* Side menu with trips items displaying their content */}

        <div id='sideMenu' className='flex flex-col items-center justify-center self-center w-[220px] h-[865px] mx-12 my-8 rounded-md bg-[#6D6F87]'>
          <TripItem pass={4} color={pickedColor} direction={"W - L"} hours={"12:45 - 14:05"}></TripItem>
        </div>
      </div>
    </div>
  )
}

export default App