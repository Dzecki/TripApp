import React, { useState } from 'react'
import { CirclePicker } from 'react-color';
import Sketch from './Images/Sketch.png';
import Sketch2 from './Images/Sketch2.png';

function App() {
  const [pickedColor, setPickedColor] = useState("#3f51b5");

  return (
    <div className='flex w-[100vw] h-[100vh] bg-[#252222]'>
      <div className='flex justify-center ml-24 w-[75%]'>

        <div className='w-[1000px] flex flex-col justify-center my-8'>

          {/* Main window displaying data contained in trips objects */}
          
          <div id='main' className='flex flex-col bg-[#6D6F87] h-[700px] mt-4 mb-4 rounded-md'>
            <div id='tripMenu' className='flex'>
              <div className='w-[290px] h-[300px] bg-[#252222] text-white font-bold text-center rounded-2xl my-12 ml-12'></div>
              <div className='w-[290px] h-[300px] bg-[#252222] text-white font-bold text-center rounded-2xl m-12'></div>
              <div>
                <div className='w-[225px] h-[145px] bg-[#252222] mt-12 mb-2 rounded-2xl'></div>
                <div className='w-[225px] h-[145px] bg-[#252222] mb-2 rounded-2xl'></div>
              </div>
            </div>

            <div id='tripNotes' className='flex ml-12 mb-4 text-white'>
              <div className='w-[212px] h-[200px] bg-[#252222] border-[1px] border-gray-700 rounded-md bg-opacity-90'>
                <h1 className='font-semibold py-2 bg-[#725DF3] text-center'>PASSENGER 1</h1>  
              </div> 

              <div className='w-[212px] h-[200px] bg-[#252222] mx-4 border-[1px] border-gray-700 rounded-md bg-opacity-90'>
                <h1 className='font-semibold py-2 bg-[#725DF3] text-center'>PASSENGER 2</h1>  
              </div> 

              <div className='w-[212px] h-[200px] bg-[#252222] border-[1px] border-gray-700 rounded-md bg-opacity-90'>
                <h1 className='font-semibold py-2 bg-[#725DF3] text-center'>PASSENGER 3</h1>  
              </div> 

              <div className='w-[212px] h-[200px] bg-[#252222] mx-4 border-[1px] border-gray-700 rounded-md bg-opacity-90'>
                <h1 className='font-semibold py-2 bg-[#725DF3] text-center'>PASSENGER 4</h1>  
                <ul className='list-disc list-inside m-4'>
                  <li><input className='w-[150px] bg-transparent my-2 active outline-0 cursor-pointer'></input></li>
                  <li><input className='w-[150px] bg-transparent my-2 active outline-0 cursor-pointer'></input></li>
                  <li><input className='w-[150px] bg-transparent my-2 active outline-0 cursor-pointer'></input></li>
                </ul>
              </div> 
            </div>
          </div>  

          {/* Menu for creating trips objects */}

          <div id='createMenu' className='flex h-[250px] bg-[#6D6F87] mb-4 mt-4 rounded-md'>
              <CirclePicker className='overflow-hidden bg-[#252222] bg-opacity-90 pt-2 pl-6'
                color={pickedColor}
                onChange={(color) => {
                  setPickedColor(color.hex);
                }}
              />
              <div style={{backgroundColor: pickedColor}} className='w-[50px] border-r-[1px] border-gray-700 transition-all'></div>

              <div className='w-[180px] h-[180px] bg-[#252222] m-5 ml-12 rounded-md bg-opacity-90 '></div> 
              <div className='m-5'>
                <div className='w-[180px] h-[80px] bg-[#252222] rounded-md bg-opacity-90'></div>
                <div className='w-[180px] h-[80px] bg-[#252222] mt-5 rounded-md bg-opacity-90'></div>
              </div>
              <div className='w-[180px] h-[180px] bg-[#252222] m-5 rounded-md bg-opacity-90'></div> 
          </div>
        </div>

        {/* Side menu with trips items displaying their content */}

        <div id='sideMenu' className='flex flex-col items-center justify-center self-center w-[250px] h-[865px] mx-12 my-8 rounded-md bg-[#6D6F87]'>
          <div className='w-[170px] h-[150px] bg-gray-600 my-6 rounded-md hover:bg-opacity-90 transition-all shadow-xl'></div>
          <div className='w-[170px] h-[150px] bg-gray-600 my-6 rounded-md hover:bg-opacity-90 transition-all shadow-xl'></div>
          <div className='w-[170px] h-[150px] bg-gray-600 my-6 rounded-md hover:bg-opacity-90 transition-all shadow-xl'></div>
          <div className='w-[170px] h-[150px] bg-gray-600 my-6 rounded-md hover:bg-opacity-90 transition-all shadow-xl cursor-pointer'></div>
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