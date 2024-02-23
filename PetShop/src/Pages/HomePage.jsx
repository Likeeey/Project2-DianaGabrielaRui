import Carousel from "../components/Carousel";

function HomePage() {

  return (
    <section className="homepage">
      <div>
        <h3 id="home-intro">They need your help to find a new home!</h3>
        <p>Meet our lovely pets and help us in this mission.</p>
      </div>
      <section className="container">
        <Carousel/>
      </section>
   
    </section>
  );
}

export default HomePage;