import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import Adoption from "./Pages/Adoption"
import AdoptionDetails from "./Pages/AdoptionDetails"
import Error from "./Pages/Error"
import About from "./Pages/About"
import Navbar from './components/NavBar'
import Footer from './components/Footer' 

import AddPet from "./components/AddPet"
import EditPet from './components/EditPet'

function App() {

  return (
   <main>
    <Navbar />
      <Routes>
        <Route path="/" element = {<HomePage />}/>
        <Route path="/adoption" element = {<Adoption />}/>
        <Route path="*" element = {<Error />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/adoptiondetails/:id" element = {<AdoptionDetails />} />
      </Routes>
      <Footer />
   </main>
  )
}

export default App;
