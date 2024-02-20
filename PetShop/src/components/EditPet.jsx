import { useState } from "react"

function EditPet (props) {
    const {pet, editPet} = props;
    const [name, setName] = useState(pet.name);
    const [species, setSpecies] = useState(pet.species);
    const [breed, setBreed] = useState(pet.breed);
    const [age, setAge] = useState(pet.age);
    const [description, setDescription] = useState(pet.description);

function HandleSubmit () {
    e.preventDefault();

    const editPet = {}
}

    return (
        <section>

        </section>
    )
}