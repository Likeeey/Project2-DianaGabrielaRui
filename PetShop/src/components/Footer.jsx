import linkedin from "../assets/images/";
import github from "../assets/images/";
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
        <a href="https://github.com/dianasdramos/recipe-book-react-app">
          
          Repository - 2024
        </a>
      </div>
    </footer>
  );
}

export default Footer;