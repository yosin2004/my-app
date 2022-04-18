import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function CarouselApp() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            src="https://source.unsplash.com/random"
            alt="random"
            width={300}
            height={300}
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random"
            alt="random"
            width={300}
            height={300}
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random"
            alt="random"
            width={300}
            height={300}
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random"
            alt="random"
            width={300}
            height={300}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselApp;
