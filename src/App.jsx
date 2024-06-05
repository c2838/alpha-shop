import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header></header>
      <main>
        <div className="checkout"></div>
        <div className="cart"></div>
      </main>
      <footer></footer>
    </>
  )
}

export default App
