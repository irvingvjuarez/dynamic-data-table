import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form>
        <input type="search" placeholder="Search by ID, CUIT or Name" />
        <button type="button">
          Search
        </button>
      </form>
    </>
  )
}

export default App
