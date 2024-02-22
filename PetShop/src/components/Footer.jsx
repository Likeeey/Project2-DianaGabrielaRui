import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
function Footer() {
  return (
    <footer className="footer">
      <div className="firstfooter">
        <img src={linkedin} />
        <a href="https://www.linkedin.com/in/gabrielavieira-da--silva/">
          <b style={{margin: "10px"}}>Gabriela Silva</b>
        </a>
        <img src={linkedin} />
        <a href="https://www.linkedin.com/in/dianaramos/">
          <b style={{margin: "10px"}}>Diana Ramos</b>
        </a>
        <img src={linkedin} />
		    <a href="https://www.linkedin.com/in/rui-marques-873667163/">
          <b style={{margin: "10px"}}>Rui Marques</b>
        </a>
      </div>
      <div className="secondfooter">
        <img src={github} alt="github icon" />
        <a style={{margin: "10px"}} href="https://github.com/Likeeey/Project2-DianaGabrielaRui/tree/master">
          Repository - 2024
        </a>
      </div>
    </footer>
  );
}

export default Footer;