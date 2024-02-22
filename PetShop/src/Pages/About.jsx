import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import diana from "../assets/images/dianaRamos.jpeg"
import gabriela from "../assets/images/gabrielaSilva.jpeg"
import rui from "../assets/images/Rui.jpg"

function About () {

    return (
        
        <section className="about">
            <p>This website is to provide people a way to adopt or put to adoption their pets.</p>
            <div>
                <p>Made By:</p>
            </div>
            <div className="picturediana">
                <img src={diana}></img>
                <p><b>Diana Ramos</b></p>
            </div>
            <div className="picturediana">
                <img src={gabriela}></img>
                <p><b>Gabriela Silva</b></p>
            </div>
            <div className="picturerui">
                <img src={rui}></img>
                <p><b>Rui Marques</b></p>
            </div>
        </section>
        
    )
}

export default About;