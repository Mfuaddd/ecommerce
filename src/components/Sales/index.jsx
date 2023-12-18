import React, { useContext } from "react";
import "./index.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { fetchContext } from "../../contexts/FetchContext";
import SalesCard from "../SalesCard";

function Sales() {
  const { apiData } = useContext(fetchContext);
  return (
    <div className="sales">
      <div className="container">
        <div className="sales__head">
          <div className="title--section">Today’s</div>
          <div className="sales__header flex flex--align-end">
            <div className="heading--section">Flash Sales</div>
            <div className="sales__time time flex flex--align-center">
              <div className="flex flex--direction-column">
                <span className="time__name">Days</span>
                <span className="time__number">03</span>
              </div>
              <div className="time__colon">:</div>
              <div className="flex flex--direction-column">
                <span className="time__name">Hours</span>
                <span className="time__number">23</span>
              </div>
              <div className="time__colon">:</div>
              <div className="flex flex--direction-column">
                <span className="time__name">Minutes</span>
                <span className="time__number">19</span>
              </div>
              <div className="time__colon">:</div>
              <div className="flex flex--direction-column">
                <span className="time__name">Seconds</span>
                <span className="time__number">56</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sales__cards">
          <Splide
            options={{
              perPage: 4,
              focus: 0,
              omitEnd: true,
              type: "loop",
              pagination: false,
            }}
          >
            {apiData.filter(x=>x.oldPrice).map((x) => (
              <SplideSlide key={x.id}>
                <SalesCard x={x} isHome={true}/>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Sales;
