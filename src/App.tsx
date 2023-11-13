import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './assets/Home'
import MeetTheStaff from './assets/MeetTheStaff'
import About from './assets/About'
import ImportantInfo from './assets/ImportantInfo'
import "./assets/index.css"

function App() {
  const [count, setCount] = useState(0)
  const [webpage, setWebpage] = useState(0)
  const array = [<Home />, <About />, <ImportantInfo />, <MeetTheStaff />]

  function handleClick(i: number){
    setWebpage(i);
  }

  return (
    <>
      <div className="page-container">
        <div className="contentWrap">
          <div className="navBar">
            <img 
              className="RedCrossImg"
              src="RedCrossLogo.png"
              alt="The Red Cross Logo"
              height="75"
              width = "75"
            />

            <button type="button" className={webpage === 3? 'active' : 'inactive'} onClick={()=>{handleClick(3)}}>Meet The Staff</button>
            <button type="button" className={webpage === 2? 'active' : 'inactive'} onClick={()=>{handleClick(2)}}>Important Info</button>
            <button type="button" className={webpage === 1? 'active' : 'inactive'} onClick={()=>{handleClick(1)}}>About</button>
            <button type="button" className={webpage === 0? 'active' : 'inactive'} onClick={()=>{handleClick(0)}}>Home</button>
          </div>
          {''}
          {array[webpage]}
        </div>

      </div>

    </>
  )
}

export default App
