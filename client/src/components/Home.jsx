import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='min-h-screen overflow-hidden w-full m-10 overflow-x-hidden bg-gradient-to-r from-black via-gray-700 to-zinc-700 flex justify-center items-center'>
        <Link to="/mountains"><div className='h-[200px] w-[300px] text-center flex justify-center items-center mr-3 text-white font-semibold bg-orange-600 hover:scale-105 transition-all duration-700 '>
          <div>
                <button className='text-center text-3xl'>
                    Mountains
                </button>
            </div>
        </div></Link>

        <Link to="/cities"><div className='h-[200px] w-[300px] text-center flex justify-center items-center ml-3 text-white font-semibold bg-purple-600 hover:scale-105 transition-all duration-700 '>
          <div>
                <button className='text-center text-3xl'>
                    Modern Cities
                </button>
            </div>
        </div></Link>
    </div>
  )
}

export default Home