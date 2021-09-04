import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="wrapper">

      <div className="profile">
        <img src="https://userpic.codeforces.org/876150/title/f6dbeb71b3f2f7fa.jpg" className="thumbnail" alt="profile"/>
        <h3 className="name">Shivam Singhal</h3>
        <p className="title">Compettive Programmer</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam
          aliquid porro!
        </p>
        <div className="ranking">
        <p>Rank: <span>233</span></p>
        <p>Max Rank: <span>233</span></p>
        </div>
        <div className="rating">
        <p>Rating: <span>233</span></p>
        <p>Max Rating: <span>233</span></p>
        </div>
        
        {/* <button type="button" className="btn">
          Hire Me
        </button> */}
      </div>

      <div className="social-icons">
        <div className="icon">
          <a href="/">
            <i className="fab fa-dribbble"></i>
          </a>
          <h4> 83</h4>
          <p>Organisation Rank</p>
        </div>

        <div className="icon">
          <a href="/">
            <i className="fab fa-behance"></i>
          </a>
          <h4>2,078</h4>
          <p>Country Rank</p>
        </div>

        <div className="icon">
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <h4>24,257</h4>
          <p>World Rank</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
