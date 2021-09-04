import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="wrapper">

      <div className="profile">
        <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" className="thumbnail" alt="profile"/>
        <h3 className="name">Beverly Little</h3>
        <p className="title">Javascript Developer</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam
          aliquid porro!
        </p>
        <button type="button" className="btn">
          Hire Me
        </button>
      </div>

      <div className="social-icons">
        <div className="icon">
          <a href="/">
            <i className="fab fa-dribbble"></i>
          </a>
          <h4>12.8k</h4>
          <p>Followers</p>
        </div>

        <div className="icon">
          <a href="/">
            <i className="fab fa-behance"></i>
          </a>
          <h4>12.8k</h4>
          <p>Followers</p>
        </div>

        <div className="icon">
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <h4>12.8k</h4>
          <p>Followers</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
