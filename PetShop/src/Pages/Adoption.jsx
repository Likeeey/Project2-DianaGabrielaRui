import { useEffect, useState } from "react"; 
import axios from 'axios';
import {Link} from 'react-router-dom';


const API_URL = "http://localhost:3000/pets";


function Adoption (){
    const [adoptions, setAdoptions] = useState([]);
    
    useEffect(()=>{
        axios.get(`${API_URL}/`)
        .then((response)=> setAdoptions(response.data))
        .catch((error)=> console.log(error));
    }, [])
    

    return (
      <div>
        {adoptions &&
          adoptions.map((adoption) => {
            return (
              <div key={adoption.id}>
                <Link to={`/adoption/${adoption.id}`}/>
                  <h4>{adoption.name}</h4>
                  <h4>{adoption.species}</h4>
                  <h4>{adoption.breed}</h4>
                  <h4>{adoption.age}</h4>
                  <h4>{adoption.description}</h4>
                  <img src={adoption.picture}/>
              </div>
            );
          })}
      </div>
    );
}
export default Adoption 