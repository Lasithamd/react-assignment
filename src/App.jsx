import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImgButton from './components/ImageButton/ImgButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Check NIC Details</h1>
      <ImgButton/>
    </>
  )
}

export default App
