import { useEffect, useState } from "react"
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:3000/pets";

function EditPet (props) {

    const {id} = props
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");
    // const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

        const data = {name, species, breed, age, description, picture};
        
        useEffect(() => {
        axios.get(`${API_URL}/${id}`, data)
        .then((response) => {
            setName(response.data.name);
            setSpecies(response.data.species);
            setBreed(response.data.breed);
            setAge(response.data.age);
            setDescription(response.data.description);
            setPicture(response.data.picture);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault();

        const data = {name, species, breed, age, description, picture};
        
        axios.put(`${API_URL}/${id}`, data)
        .then((response) => {
            navigate(`/adoptiondetails/${id}`)
        })
        .catch((error) => {
            console.log(error);
        })
};

    /*function deletePet () {
        axios.delete(`${API_URL}/${id}`)
        .then(() => {
        navigate("/adoption");
    })
        .catch((error) =>
        console.log(error)
    )}*/


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
                    Description
                </label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <label>
                    Picture
                </label>
                <input type="text" name="picture" value={picture} onChange={(e) => setPicture(e.target.value)}/>

                <button type="submit">Save Pet</button>
            </form>

            {/*<button onClick={deletePet}>Delete</button>*/}
        </section>
    )
}

export default EditPet;