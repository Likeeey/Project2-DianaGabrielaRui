import { useEffect, useState } from "react"; 
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import AdoptionDetails from "./AdoptionDetails";
import Addpet from "../components/AddPet"

const API_URL = "http://localhost:3000/pets";


function Adoption (){
    const [petCreated, setPetCreated] = useState(false);
    const [adoptions, setAdoptions] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API_URL}`)
        
        .then((response)=> setAdoptions(response.data))
        .catch((error)=> console.log(error));
    }, [petCreated]);
    
    function newPets(newPet) {

      axios.post(`${API_URL}`, newPet)
      .then((response) => {
        setPetCreated(true);
        setPetDelete(true);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    return (
      <div>
        <div>
            <h3>Add your pet</h3>
            <Addpet newPets={newPets}/>
        </div>
        {adoptions &&
          adoptions.map((adoption) => {
            return (
              <div key={adoption.id}>
                <Link to={`/adoptiondetails/${adoption.id}`}>
                  <h4>{adoption.name}</h4>
                  </Link>
                  <h4>{adoption.species}</h4>
                  <h4>{adoption.breed}</h4>
                  <h4>{adoption.age}</h4>
                  <img src={adoption.picture}/>
              </div>
            );
          })}
      </div>
    );
}
export default Adoption;