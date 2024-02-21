import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom';
import Adoption from "./Adoption";
import EditPet from "../components/EditPet";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'

const API_URL = "https://backend-server-awt7.onrender.com/";


function AdoptionDetails() {
    const [adoption, setAdoption] = useState([]);
    const {id} = useParams();

    useEffect(() => {
    axios.get(`${API_URL}/${id}`)
    .then((response)=> setAdoption(response.data))
    .catch((error)=> console.log(error))
    })
    
    return (
        <section>
            <div>
                <EditPet id={id}/>
            </div>
             <div key={adoption.id}>
                  <h4>{adoption.name}</h4>
                  <h4>{adoption.species}</h4>
                  <h4>{adoption.breed}</h4>
                  <h4>{adoption.age}</h4>
                  <h4>{adoption.description}</h4>
                  <img src={adoption.picture}/>
              </div>
              <div>
                <Link to={`/adoption`}>
                    <button>Back</button>
                </Link>
              </div>
              <div>
                <Popup trigger={<button>Adopt</button>}
                    position="right center">
                <div>For more information contact us via email:</div>
                <p>adoptpets825@gmail.com</p>
                </Popup>
                </div>
        </section>
    )

}

export default AdoptionDetails;