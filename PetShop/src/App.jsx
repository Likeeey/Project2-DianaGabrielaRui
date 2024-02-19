import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import Adoption from "./Pages/Adoption"
import AdoptionDetails from "./Pages/AdoptionDetails"
import Error from "./Pages/Error"

function App() {

  return (
   <main>
      <Routes>
        <Route path="/" element = {<HomePage />}/>
        <Route path="/adoption/" element = {<Adoption />}/>
        <Route path="/adoption/:id" element = {<AdoptionDetails />}/>
        <Route path="*" element = {<Error />}/>
      </Routes>
   </main>
  )
}

export default App
