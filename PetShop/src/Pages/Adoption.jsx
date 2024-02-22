import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Addpet from "../components/AddPet";
const API_URL = "http://localhost:3000/pets";
function Adoption() {
  const [adoptions, setAdoptions] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/`)
      .then((response) => setAdoptions(response.data))
      .catch((error) => console.log(error));
  }, []);
  function newPets(newPet) {
    const newAdoption = { ...newPet, newPet }; // Create a new object with the unique id generated automatically by json server
    setAdoptions((pets) => [...pets, newAdoption]);
    axios
      .post(`${API_URL}/`, newAdoption)
      .then((response) => {
        setAdoptions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="container">
      <div className="addPet">
        <h3>Add your pet</h3>
        <Addpet newPets={newPets} />
      </div>
      {adoptions &&
        adoptions.map((adoption) => {
          return (
            <div className="cardsContainer" key={adoption.id}>
              <div className="cardAdoption" >
                <img src={adoption.picture} />
                <div className="cardsText">
                  <Link to={`/adoptiondetails/${adoption.id}`}>
                    <h4>Hi! My name is {adoption.name}</h4>
                  </Link>
                  <h4>I am a {adoption.species},</h4>
                  <h4>my breed is {adoption.breed} and</h4>
                  <h4>I am {adoption.age} years old</h4>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Adoption;