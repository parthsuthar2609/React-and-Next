import { useState } from 'react'

export default function App() {
  const [color, setColor] = useState("bg-red-600")

  return (
    <div className={`min-h-screen ${color} flex flex-col justify-between transition-colors duration-300`}>
      {/* Main content */}
      <div className="flex-grow"></div>

      {/* Bottom white bar with side rounding */}
      <div className="bg-white h-20 w-auto rounded-4xl mb-16 mx-4 flex overflow-x-auto">
        <button className='bg-red-600 text-amber-50 h-12 w-24 rounded-4xl mx-4 mt-4' onClick={() => setColor("bg-red-600")}>Red</button>
        <button className='bg-green-600 text-amber-50 h-12 w-24 rounded-4xl mx-4 mt-4' onClick={() => setColor("bg-green-600")}>Green</button>
        <button className='bg-orange-600 text-amber-50 h-12 w-24 rounded-4xl mx-4 mt-4' onClick={() => setColor("bg-orange-600")}>Orange</button>
        <button className='bg-black text-amber-50 h-12 w-24 rounded-4xl mx-4 mt-4' onClick={() => setColor("bg-black")}>Black</button>
        <button className='bg-blue-600 text-amber-50 h-12 w-24 rounded-4xl mx-4 mt-4' onClick={() => setColor("bg-blue-600")}>Blue</button>
        <button className='bg-pink-600 text-amber-50 h-12 w-24 rounded-4xl mx-4 mt-4' onClick={() => setColor("bg-pink-600")}>Pink</button>
        <button className='bg-yellow-600 text-amber-50 h-12 w-24 rounded-4xl mx-4 mt-4' onClick={() => setColor("bg-yellow-600")}>Yellow</button>
        <button className='bg-white text-black h-12 w-24 rounded-4xl mx-4 mt-4 border-2 border-gray-950' onClick={() => setColor("bg-white")}>White</button>
        <button className='bg-purple-600 text-amber-50 h-12 w-24 rounded-4xl mx-4 mt-4' onClick={() => setColor("bg-purple-600")}>Purple</button>
        <button className='bg-amber-950 text-amber-50 h-12 w-24 rounded-4xl mx-4 mt-4' onClick={() => setColor("bg-amber-950")}>Brown</button>
        <button className='bg-green-800 text-amber-50 h-12 w-24 rounded-4xl mx-4 mt-4' onClick={() => setColor("bg-green-800")}>Dark Green</button>
        <button className='bg-blue-400 text-amber-50 h-12 w-24 rounded-4xl mx-4 mt-4' onClick={() => setColor("bg-blue-400")}>Lite Blue</button>
      </div>
    </div>
  )
}
