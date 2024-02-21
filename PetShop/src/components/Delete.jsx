import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const API_URL = "https://backend-server-awt7.onrender.com/";

function Delete(props) {

    const {id, setPetCreated} = props;
    function handleDelete () {
        
        axios.delete(`${API_URL}/${id}`)
        .then(() => {
           setPetCreated((prev)=> !prev);
        })
        .catch((error) => console.log(error));
    };
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default Delete;