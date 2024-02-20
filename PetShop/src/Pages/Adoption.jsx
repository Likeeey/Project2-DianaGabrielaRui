import { useEffect, useState } from "react"; 
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import AdoptionDetails from "./AdoptionDetails";
import Addpet from "../components/AddPet"
import Delete from "../components/Delete"



const API_URL = "http://localhost:3000/pets";


function Adoption (){

    const [adoptions, setAdoptions] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}`)
        .then((response)=> setAdoptions(response.data))
        .catch((error)=> console.log(error));
    }, [])
    
    function newPets(newPet) {
      const newAdoption = { ...newPet, newPet }; // Create a new object with the unique id

      setAdoptions((pets) => [...pets, newAdoption])
      axios.post(`${API_URL}`, newAdoption)
      .then((response) => {
        setAdoptions(response.data)

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
                  <div>
                      <Delete id={adoption.id}/>
                  </div>
              </div>
            );
          })}
      </div>
    );
}
export default Adoption;