import React, { useContext, useEffect, useState } from "react";
import "./index.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { fetchContext } from "../../contexts/FetchContext";
import SalesCard from "../SalesCard";

function Sales() {
const { apiData } = useContext(fetchContext);

  const [time, setTime] = useState(0)

  useEffect(() => {
    setTimeout(()=>setTime(new Date("Jan 5, 2024 15:37:25").getTime() - new Date().getTime()),1000)
  }, [time])

  function toDays() {
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }
  function toHours() {
    return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  function toMinutes() {
    return Math.floor((time% (1000 * 60 * 60)) / (1000 * 60));
  }
  function toSeconds() {
    return Math.floor((time % (1000 * 60)) / 1000);
  }

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
                <span className="time__number">{toDays()}</span>
              </div>
              <div className="time__colon">:</div>
              <div className="flex flex--direction-column">
                <span className="time__name">Hours</span>
                <span className="time__number">{toHours()}</span>
              </div>
              <div className="time__colon">:</div>
              <div className="flex flex--direction-column">
                <span className="time__name">Minutes</span>
                <span className="time__number">{toMinutes()}</span>
              </div>
              <div className="time__colon">:</div>
              <div className="flex flex--direction-column">
                <span className="time__name">Seconds</span>
                <span className="time__number">{toSeconds()}</span>
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
