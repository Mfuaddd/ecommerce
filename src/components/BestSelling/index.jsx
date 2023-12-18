import React, { useContext } from "react";
import { fetchContext } from "../../contexts/FetchContext";
import SalesCard from "../SalesCard";
import "./index.scss"

function BestSelling() {
  const { apiData } = useContext(fetchContext);
  return (
    <div className="bestselling">
      <div className="container">
        <div className="bestselling__title title--section">This Month</div>
        <div className="bestselling__heading flex flex--justify-between flex--align-center">
          <div className="heading--section">Best Selling Products</div>
          <div className="bestselling__btn">View All</div>
        </div>
        <div className="bestselling__cards">
          {apiData.slice(8,24).map((x) => (
              <SalesCard x={x} isHome={true} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BestSelling;
