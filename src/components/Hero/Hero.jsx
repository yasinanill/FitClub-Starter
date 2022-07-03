import React from "react";
import "./hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_imageback from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import CAlories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <div className=""></div>
        <Header />
        <div className="the-beast">
          <div className=""></div>
          <span>Buradaki en iyi gym olumbu</span>
        </div>

        <div className="hero-text">
          <div className="">
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div className="">
            <span>Ideal </span>
            <span>Body</span>
          </div>

          <div className="">
            <span>
              Animated FlatList component that supports entering, exiting and
              reordering animations
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span> + 140</span>
            <span> expert coaches</span>
          </div>

          <div>
            <span> + 980 </span>
            <span> Members Joined</span>
          </div>

          <div>
            <span>+ 50</span>
            <span>Fitness Program </span>
          </div>
        </div>

        <div className="hero-button">
          <button className="btn"> get started</button>

          <button className="btn"> learn more </button>
        </div>
      </div>



      <div className="right-h">
      
      
            <button className="btn">
                    join Now
            </button>

       <div className="heart-rate">
        <img  src={Heart} alt='' className=''/>

        <span>Heart rate</span>
        <span>116 bpm</span>
       </div>     
      
        <img src={hero_image} alt='' className='hero-image'/>
        <img src={hero_imageback} alt='' className='hero-image-back'/>


        <div className="calories">
                <img src={CAlories} alt='' className=''/>

                <div>
                    <span>calories burn</span>
                    <span>220 kcal </span>
                    
                    </div>
         </div>
      

      
      
      
      
      
      </div>
    </div>
  );
};

export default Hero;
