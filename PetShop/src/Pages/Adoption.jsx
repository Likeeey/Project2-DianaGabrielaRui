import { useEffect, useState } from "react"; 
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import AdoptionDetails from "./AdoptionDetails";
import Addpet from "../components/AddPet"
import Delete from "../components/Delete";

const API_URL = "http://localhost:3000/pets";



function Adoption (){
    const [petCreated, setPetCreated] = useState(false);
    const [adoptions, setAdoptions] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}`)
        
        .then((response)=> setAdoptions(response.data))
        .catch((error)=> console.log(error));
    }, [petCreated]);
    
    function newPets(newPet) {

      axios.post(`${API_URL}`, newPet)
      .then(() => {
        setPetCreated((prev)=> !prev); // É o switch criado para ele mudar de State de false para true
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
                  <Delete id={adoption.id} setPetCreated={setPetCreated}/>
              </div>
            );
          })}
          
      </div>
    );
}
export default Adoption;