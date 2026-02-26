import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  const api = async() => {
    const res = await fetch('https://dummyjson.com/users')
    const data = await res.json()
    console.log(data.users)
  }

  return (
    <div className='flex flex-col gap-6 justify-center w-screen h-screen items-center'>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        <button className='border-2 border-black bg-amber-100 hover:bg-amber-700 active:bg-violet-800' onClick={() => api()}>
          спарсить юзеров
        </button>
        <p>
          Tailwind eto kruto
        </p>
    </div>
  )
}

export default App
