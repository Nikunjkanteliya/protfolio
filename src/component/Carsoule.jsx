import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import style from "./style/carsoule.module.css";

class DemoCarousel extends Component {
  render() {
    return (
      <div >
        <Carousel
        className={style.car1}
          showThumbs = {false}
          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
          showArrows={false}
        >
          <div>
            <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.webp" />
           
          </div>
          <div>
            <img src="https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg" />
            
          </div>
          <div>
            <img src="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124" />
         
          </div>
          {/* //// */}
          <div>
            <img src="https://www.sun-exp.com/images/article/main/09f925c3-0d59-482f-8374-49a402ce461b.png" />
         
          </div>
          {/* //// */}
          <div>
            <img src="https://redux.js.org/img/redux-logo-landscape.png" />
         
          </div>
        </Carousel>
      </div>
    );
  }
}
export default DemoCarousel;
