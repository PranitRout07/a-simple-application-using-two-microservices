import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-min-screen overflow-y-hidden w-full m-10 overflow-x-hidden bg-gradient-to-r from-black via-gray-700 to-zinc-700 flex justify-center items-center '>
      <Layout/>
    </div>
  )
}

export default App
