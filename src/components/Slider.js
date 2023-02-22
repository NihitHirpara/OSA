import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={2000}
       >
        <div>
          <img src="images/jorden (2).jpg" alt="Item1"  style={{width:"100%",height:"500px", objectFit:"cover" }} />
          <p className="legend">shoes</p>
        </div>
        <div >
          <img src="images/laptop.jpg" alt="Item3" style={{width:"100%",height:"500px" ,objectFit:"cover"}}/>
          <p className="legend">Laptop</p>
        </div>
        <div >
          <img src="images/watch-1.jpg" alt="Item3" style={{width:"100%",height:"500px" ,objectFit:"cover"}} />
          <p className="legend">Watch</p>
        </div>
        <div >
          <img src="images/jecket.jpg" alt="Item3" style={{width:"100%",height:"500px" ,objectFit:"cover"}} />
          <p className="legend">Men's Wear</p>
        </div>
      </Carousel>
    </>
  )
}

export default Slider
