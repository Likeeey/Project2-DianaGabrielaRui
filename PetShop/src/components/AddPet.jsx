import { useState } from "react"

function AddPet (props) {

    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);
    const [picture, setPicture] = useState(null);

    function handleSubmit(e) {

        e.preventDefault();

        const newPet = {name, species, breed, age, picture}
        props.newPets(newPet);

        setName("");
        setSpecies("");
        setBreed("");
        setAge(0);
        setPicture(null);
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setPicture(URL.createObjectURL(file));
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
                <input type="file" accept="image/*" onChange={(handleImageChange)}/>

                <button type="submit">Add Pet</button>
            </form>
        </section>
    )
}

export default AddPet;