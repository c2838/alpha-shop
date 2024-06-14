import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Main from './components/mainContent.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App
