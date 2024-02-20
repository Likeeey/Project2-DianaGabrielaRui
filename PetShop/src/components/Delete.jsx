import axios from "axios";
import { useNavigate } from "react-router-dom";


const API_URL = "http://localhost:3000/pets";

function Delete(props) {

    const {id} = props;
    const navigate = useNavigate();
    
    function handleDelete () {
        
        axios.delete(`${API_URL}/${id}`)
        .then((response) => {
          navigate("/adoption")
        })
        .catch((error) => console.log(error));
    };
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default Delete;