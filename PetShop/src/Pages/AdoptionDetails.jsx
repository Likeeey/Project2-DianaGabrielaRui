import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom';
import Adoption from "./Adoption";
import EditPet from "../components/EditPet";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';

const API_URL = "https://backend-server-awt7.onrender.com/pets";


function AdoptionDetails() {
    const [adoption, setAdoption] = useState([]);
    const {id} = useParams();

    useEffect(() => {
    axios.get(`${API_URL}/${id}`)
    .then((response)=> setAdoption(response.data))
    .catch((error)=> console.log(error))
    }, [])
    
    return (
        <section id="adoption-details">
            <div id="details-edit-form"key={adoption.id}>
                <div>
                  <h4 id="details-name">{adoption.name}</h4>
                </div>
                <div>
                    <img id="details-picture"src={adoption.picture}/>
                </div>
                    <div id="details-info">
                        <h4 className="details-info">Species: {adoption.species}</h4>
                        <h4 className="details-info">Breed: {adoption.breed}</h4>
                        <h4 className="details-info">Age: {adoption.age}</h4>
                    </div>
                    <div id="details-description">
                        <h4>{adoption.description}</h4>
                    </div>
                </div>
              <div id="popup">
                <Popup trigger={<button>Adopt</button>}
                    position="right center">
                <div>For more information contact us via email:</div>
                <p>adoptpets825@gmail.com</p>
                </Popup>
                </div>
                <div id="share-buttons">
                    <div id="facebook-share">
                        <FacebookShareButton
                            url={`https://backend-server-awt7.onrender.com/pets/adoptiondetails/${id}`}
                            hashtag="#AdoptPets">
                            <FacebookIcon size={30} round />
                        </FacebookShareButton>
                    </div>
                    <div id="twitter-share">
                        <TwitterShareButton
                            url={`https://backend-server-awt7.onrender.com/pets/adoptiondetails/${id}`}
                            title={'He needs a new home!'}
                            hashtags={["AdoptPets"]}>
                            <TwitterIcon size={30} round />
                        </TwitterShareButton>
                    </div>
                    <div id="whatsapp-share">
                        <WhatsappShareButton
                            url={`https://backend-server-awt7.onrender.com/pets/adoptiondetails/${id}`}
                            title={'He needs a new home!'}>
                            <WhatsappIcon size={30} round />
                        </WhatsappShareButton>
                    </div>
                </div>
                <div id="details-edit">
                    <EditPet id={id}/>
                </div>
                <div id="details-back-button">
                <Link to={`/adoption`}>
                    <button>Back</button>
                </Link>
              </div>
        </section>
    )

}

export default AdoptionDetails;