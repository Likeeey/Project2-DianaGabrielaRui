import { useState, useEffect } from "react"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function AddPet (props) {

    const [id, setId] = useState(0)
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);
    const [picture, setPicture] = useState(null);

    const API_URL = "http://localhost:3000/pets";


    function handleSubmit(e) {

        e.preventDefault();

        const newPet = {name, species, breed, age, picture}

        axios.post(API_URL, newPet)
        .then((response)=> props.addPet(response.data))
        .catch((error)=> console.log(error));


        setName("");
        setSpecies("");
        setBreed("");
        setAge(0);
        setPicture(null);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                </label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label>
                    Species
                </label>
                <input type="text" name="species" value={species} onChange={(e) => setSpecies(e.target.value)} />
                <label>
                    Breed
                </label>
                <input type="text" name="breed" value={breed} onChange={(e) => setBreed(e.target.value)}/>
                <label>
                    Age
                </label>
                <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
                <label>
                    Picture
                </label>
                <input type="text" name="picture" value={picture} onChange={(e) => setPicture(e.target.value)}/>

                <button type="submit">Add Pet</button>
            </form>
        </section>
    )
}

export default AddPet;