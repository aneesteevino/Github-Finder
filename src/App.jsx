import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='card'>
     <h2> Welcome To GitHub</h2>
     <img id='pic' src="https://seekicon.com/free-icon-download/github-circle_1.svg" alt="" srcset="" />
    <input type="text" placeholder='Search for users' id='users' />
    <button id="search_btn">Search</button>
    

</div>
  )
}

export default App
