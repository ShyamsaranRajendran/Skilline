import React from 'react'
// import "./css/services.css";
import icon4 from '../assets/icon4.svg';
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";
import rect1 from "../assets/Rectangle 19.png"
import rect2 from "../assets/Rectangle 21.png";
import  meta from "../assets/facebook.svg";
import ama from "../assets/amazon.svg"
import grab from "../assets/grab-logo.svg";
import air from "../assets/airbnb.svg";
import google from "../assets/google.svg";
import "./css/services.css"
function Services() {
  return (
    <div className="Services">
      <h2>Trusted by 5,000+ Companies Worldwide</h2>
      <div className="images-company">
        <img src={meta} alt="sssss" />
        <img src={ama} alt="sssss" />
        <img src={grab} alt="sssss" />
        <img src={air} alt="sssss" />
        <img src={google} alt="sssss" />
      </div>

      <div className="ServicesBody">
        <div className="Servicestitle">
          <p>
            <span>All-In-One </span> Cloud Software.
          </p>
        </div>
        <div className="servicesContent">
          <p>
            Skilline is one powerful online software suite that combines all the
          </p>
          <p>tools needed to run a successful school or office.</p>
        </div>
        <div className="ServicesGrid">
          <div className="grid1">
            <img src={icon5} alt="" />
            <p className="cont-title">Online Billing, Invoicing, & Contracts</p>
            <p>
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts
            </p>
          </div>
          <div className="grid1">
            <img src={icon6} alt="" />
            <p className="cont-title">Easy Scheduling & Attendance Tracking</p>
            <p>
              Schedule and reserve classrooms at one campus or multiple
              campuses. Keep detailed records of student attendance
            </p>
          </div>
          <div className="grid1">
            <img src={icon4} alt="" />
            <p className="cont-title">Customer Tracking</p>
            <p>
              Automate and track emails to individuals or groups. Skilline’s
              built-in system helps organize your organization{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services