import React, { useContext, useEffect } from "react";
import { fetchContext } from "../../contexts/FetchContext";
import Hero from "../../components/Hero";
import Sales from "../../components/Sales";
import BestSelling from "../../components/BestSelling";
import Carousel from "../../components/Carousel";

function Home() {
  const { getFetch } = useContext(fetchContext);

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <Hero />
      <Sales />
      <BestSelling />
      <div className="container">
        <Carousel>
          <div className="test__card">1</div>
          <div className="test__card">2</div>
          <div className="test__card">3</div>
          <div className="test__card">4</div>
          <div className="test__card">5</div>
          <div className="test__card">6</div>
          <div className="test__card">7</div>
          <div className="test__card">8</div>
          <div className="test__card">9</div>
        </Carousel>
      </div>
    </>
  );
}

export default Home;
