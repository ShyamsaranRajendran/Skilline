import React from 'react'
import "./css/hero.css";
import Background from "../assets/background.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import pasue from "../assets/pasue.svg";
import profile from "../assets/profile.svg";
import teen from "../assets/teen-girl.png";
import Header from "./Header.jsx";
function Hero() {
  return (
    <div className="Hero">
      <Header />
      <div className="HeroBody">
        <div className="Hero-left">
          <p className="Head-title">
            <span>Studying</span> Online is now much easier
          </p>
          <p className="Head-content">
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="btns">
            <button className="Join">Join for free</button>
            <div className="grp-btn">
              <button>
                {" "}
                <img src={pasue} alt="" />
              </button>
              <p>Watch how it works</p>
            </div>
          </div>
        </div>
        <div className="Hero-right">
          <img src={teen} alt="" />
          <div className="card1 pos1">
            <img src={icon1} alt="" className="icon" />
            <div className="card-con">
              <p>250K</p>
              <p>Assisted Students</p>
            </div>
          </div>
          <div className="card1 pos2">
            <img src={icon2} alt="" className="icon" />
            <div className="card-con">
              <p>Congratulations</p>
              <p>Your admission completed</p>
            </div>
          </div>
          <div className="card1 pos4">
            <img src={profile} alt="" className="icon" />
            <div className="card-con">
              <p>User Experience Class</p>
              <p>Today at 12.00 PM</p>
              <button>Join Now</button>
            </div>
          </div>
          <div className="card1 pos3">
            <img src={icon3} alt="" className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero