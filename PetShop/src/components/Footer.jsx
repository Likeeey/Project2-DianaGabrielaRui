import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
function Footer() {
  return (
    <footer>
      <div className="firstLine">
        <img src={linkedin} />

        <a href="https://www.linkedin.com/in/gabrielavieira-da--silva/">
          <b>Gabriela Silva</b>
        </a>
        <a href="https://www.linkedin.com/in/dianaramos/">
          <b>Diana Ramos</b>
        </a>
		<a href="https://www.linkedin.com/in/rui-marques-873667163/">
          <b>Rui Marques</b>
        </a>
      </div>
      <div className="secondLine">
        <img src={github} alt="github icon" />
        <a href="https://github.com/Likeeey/Project2-DianaGabrielaRui/tree/master">
          
          Repository - 2024
        </a>
      </div>
    </footer>
  );
}

export default Footer;