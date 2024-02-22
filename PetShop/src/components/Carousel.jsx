import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import left from "../assets/images/left-arrow.png"
import right from "../assets/images/right-arrow.png"

const API_URL = "https://backend-server-awt7.onrender.com/pets";

function Carousel() {
  const [card, setCard] = useState(0);
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL)
    .then((response) => {
      setCarouselData(response.data);
      setLoading(false);
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
  }, []);


  const nextCard = () => {
    if (card < carouselData.length - 1) {
      setCard((card + 1) % carouselData.length);
    }
  };

  const previousCard = () => {
    if (card > 0) {
      setCard(card - 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  
  return (
    <>
      <div className="carousel-container">
        <div className="arrow" onClick={previousCard}>
          <img src={left} alt="left arrow" />
        </div>
        <article key={carouselData[card].id}>
          <div className="carousel-div">
            <div className="card">
              <div id="Picture">
                <img src={carouselData[card].picture} alt={carouselData[card].name} />
  </div>
              <div>
                <h3>{carouselData[card].name}</h3>
                <p>{carouselData[card].breed}</p>
              </div>
              <div className="bigCardButtons">
                <Link id="goAdoptionDetailsBtn" to={`/adoptionDetails/${carouselData[card].id} ` } state={carouselData[card]}>
                  <button>Go to your pet</button>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <article key={carouselData[card + 1].id}>
          <div className="carousel-div">
            <div className="card">
              <div id="Picture">
                <img src={carouselData[card  + 1].picture} alt={carouselData[card  + 1].name} />
</div>
              <div>
                <h3>{carouselData[card  + 1].name}</h3>
                <p>{carouselData[card  + 1].breed}</p>
              </div>
              <div className="bigCardButtons">
                <Link id="goAdoptionDetailsBtn" to={`/adoptionDetails/${carouselData[card  + 1].id}` } state={carouselData[card]}>
                  <button>Go to your pet</button>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <div className="arrow" onClick={nextCard}>
          <img src={right} alt="right arrow" />
        </div>
      </div>
    </>
  );
}

export default Carousel;