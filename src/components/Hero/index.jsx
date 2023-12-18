import React from "react";
import "./index.scss"

function Hero() {
  return (
    <div className="hero">
      <div className="container flex">
        <ul className="hero__categories">
          <li className="flex flex--justify-between">
            <p>Woman's Fashion</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                fill="black"
              />
            </svg>
          </li>
          <li className="flex flex--justify-between">
            <p>Men's Fashion</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                fill="black"
              />
            </svg>
          </li>
          <li>Electronics</li>
          <li>Home & LifeStyle</li>
          <li>Medicine</li>
          <li>Sport & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Gloceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
        <div className="hero__carousel">
        </div>
      </div>
    </div>
  );
}

export default Hero;
