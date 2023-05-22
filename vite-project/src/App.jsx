

import BotCollection from "./assets/BotCollection.jsx"
import ArmyBots from "./assets/ArmyBots.jsx"
import { useState, useEffect } from 'react'
function App() {
 const [bots, setBots] = useState([])
const[selectedBot, setSelectedBot] = useState([])
 useEffect(()=>{
  fetch (" http://localhost:3000/bots")
  .then(res => res.json())
  .then((data)=>{
    setBots(data)
   
  })
 }, [])
  return (
    <>
    <></>
    <ArmyBots  selectedBot={selectedBot} setSelectedBot={setSelectedBot}/>
  <BotCollection bots={bots} setSelectedBot={setSelectedBot}/>
    </>
  )
}

export default App

















