import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelecetedPlayers/SelectedPlayers'
import Banner from './Components/Navbar/Banner'


const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggole] = useState(true);
   const [banlance, setBanlance] = useState(3000000);
  
  return (
    <>
      <Navbar banlance={banlance}></Navbar>
      <Banner></Banner>

      <div className=' max-w-[1200px mx-auto flex justify-between items-center max-w-[1200px] mx-auto' >
        <h1 className='font-bold text-2xl'>Available players</h1>
        <div className='font-bold'>
          <button onClick={()=>setToggole(true)} className={`py-3 px-5 border-1 border-r-0 border-grey rounded-l-xl ${ toggle === true ? 'bg-green-800' : '' }`}>Available</button>
          <button onClick={()=>setToggole(false)} className={`py-3 px-5 border-1 border-l-0 border-grey rounded-r-xl ${ toggle === false ? 'bg-green-800' : '' }`}>Selected(0)</button>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
          <AvailablePlayers playersPromise={playersPromise} banlance={banlance} setBanlance={setBanlance}></AvailablePlayers>
        </Suspense> :
          <SelectedPlayers></SelectedPlayers>
      }

    </>
  )
}

export default App
