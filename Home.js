import React from "react";
import vg from "../assets/2.webp";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillFacebook,
  AiFillApple,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
          “Those people who develop the ability to continuously acquire new and better forms of knowledge 
          that they can apply to their work and to their lives will 
          be the movers and shakers in our society for the indefinite future.”—Brian Tracy
          
          <h3> Are u ready to EXPLORE? Let's start the journey with us...!!</h3> 
        
          </p>
        </div>
      </div>

      <div className="home3" id="about">
       
        <div>
          <h1>About Us</h1>
          <p>
             
            We are here to support you in your learning journey 
            and help you to be hired in the your dream company by 
            updating you with the latest technology on which  currently 
             various companies working on. Get in touch with us and not to forget that,
             "The expert in anything was once a beginner." So keep learning and practicing...!!

             <h3> Email id : Vaishalichauhan946@gmail.com</h3>
        
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillFacebook />
              <p>Facebook</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillApple />
              <p>Apple</p>
            </div>
            
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
