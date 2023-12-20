import React, { useRef, useState } from "react";
import "./index.scss";

function Carousel({ children }) {
  const [point, setPoint] = useState(0)
  const [moveDirection, setMoveDirection] = useState(false)
  const [isMoving, setIsMoving] = useState(false)
  const carouselRef = useRef(null);
  const slideCount = children.length

  const carousel = {
    width: carouselRef.current?.offsetWidth,
  }
  const slide = {
    width: carousel.width / 4,
  };
  const track = {
    width: slide.width * slideCount,
  };
  console.log(point);
  const trackStyle = {
    width: `${track.width}px`,
    transform: `translateX(${point * slide.width}px)`,
    transition: `all ${isMoving ? "400ms" : "0"}`
  };
  const slideStyle = {
    width: `${slide.width}px`
  }

  function moveRight() {
    setIsMoving(true)
    setPoint(point - 1)
    setMoveDirection(true)
  }
  function moveLeft() {
    setIsMoving(true)
    setPoint(point + 1)
    setMoveDirection(false)
  }

  function moveEnd() {
    setIsMoving(false) 
  }

  return (
    <div ref={carouselRef} className="carousel">
      <button onClick={moveLeft}>prev</button>
      <button onClick={moveRight}>next</button>
      <span>{point}</span>
      <div className="carousel__list">
        <div className="carousel__track carousel__track--active" style={trackStyle} onTransitionEnd={moveEnd}>
          {children.map((x,i) => (
            <div key={i} className="carousel__slide" style={slideStyle}>
              {x}
            </div>
          ))}
        </div>
        {/* <div className="carousel__track carousel__track--clone" style={trackStyle}>
          {children.map((x,i) => (
            <div key={i} className="carousel__slide" style={slideStyle}>
              {x}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Carousel;
