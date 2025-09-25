import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelecetedPlayers/SelectedPlayers'
import Banner from './Components/Navbar/Banner'

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}
function App() {
  const playersPromise = fetchPlayers()
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
