import { useState } from 'react'
import Trip from './components/Trip'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Trip />
    </>
  )
}

export default App
