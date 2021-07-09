import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
import Simages from "./images"

const DemoCarousel =()=>{
    
    return (
        <Carousel infiniteLoop={true} useKeyboardArrows autoPlay showThumbs={false} showIndicators={true} showStatus={false}>
            <div>
                <img src={Simages.image1} alt="carousel01"/>             
            </div>
            <div>
                <img src={Simages.image2}  alt="carousel02"/>                
            </div>
            <div>
                <img src={Simages.image3}  alt="carousel03"/>               
            </div>
            <div>
                <img src={Simages.image4} alt="carousel04"/>             
            </div>
           
        </Carousel>
        
    );
}

export default  DemoCarousel;