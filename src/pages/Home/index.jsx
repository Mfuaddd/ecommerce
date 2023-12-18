import React, { useContext, useEffect } from "react";
import { fetchContext } from "../../contexts/FetchContext";
import Hero from "../../components/Hero";
import Sales from "../../components/Sales";
import BestSelling from "../../components/BestSelling";

function Home() {
    const { getFetch } = useContext(fetchContext)

    useEffect(() => {
        getFetch()
    }, [])
    
  return (
    <>
      <Hero />
      <Sales />
      <BestSelling/>
    </>
  );
}

export default Home;
