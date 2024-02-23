import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Addpet from "../components/AddPet";


const API_URL = "https://backend-server-awt7.onrender.com/pets";


function Adoption() {
  const [adoptions, setAdoptions] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/`)
      .then((response) => setAdoptions(response.data))
      .catch((error) => console.log(error));
  }, []);

  /*
  * Function to save the new pet and refresh the list (setAdoption) This function is passed as prop to Addpet component
  */
  function newPets(newPet) {
    axios
      .post(`${API_URL}/`, newPet)
      .then((response) => {
        setAdoptions((pets) => [...pets, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="addPet">
        <h3>Add your pet</h3>
        <Addpet newPets={newPets} />
      </div>
      <div className="cardsContainer">
      {adoptions &&
        adoptions.map((adoption) => {
          return (
            <div key={adoption.id}>
              <div className="cardAdoption" >
                <img src={adoption.picture} />
                <div className="cardsText">
                    <h3>Hi! My name is {adoption.name}</h3>
                    <p>I am a {adoption.species}, my breed is {adoption.breed} and I am {adoption.age} years old.</p>
                    <Link style={{ textDecoration: 'none' }} to={`/adoptiondetails/${adoption.id}`}>
                      <button className="standardButton" id="adopt-button">Adopt</button>
                    </Link>
                  </div>
              </div>
            </div>
          );
        })}
        </div>
    </div>
  );
}
export default Adoption;