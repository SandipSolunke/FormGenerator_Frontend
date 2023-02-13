import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./AboutUs.css";
import Navbar from '../Navbar/Navbar.js';
import aboutUsImg from "./aboutUs.png";
const AboutUs = (props) => {



 return (
    <div className="about-root">
    <Navbar />
    <div className="info">
    <h2 className="aboutHead">Welcome to Form Generator</h2>
    <p className="aboutPara">Welcome to <b>Form Generator Website</b>, the ultimate tool for creating forms in an easy and efficient manner.<br />

    We understand that creating forms can be a time-consuming and tedious task, and that's why we created <b>Form Generator Website.</b> <br />Our platform offers a quick and user-friendly solution to generate forms in just a few clicks. Whether you're creating a survey, contact form, or a feedback form, our platform has you covered.

     <br /> With <b>Form Generator Website</b>, you can customize your forms to match your brand, embed them on your website, and receive submissions directly to your email. Our platform is also mobile-responsive, ensuring that your forms are accessible from any device.

    <br />At Form Generator Website, our mission is to make form-creation accessible to everyone. We believe that forms should be simple, efficient, and beautiful, and that's what we strive to deliver with our platform.

    Thank you for choosing Form Generator Website. If you have any questions or feedback, please don't hesitate to reach out to us. We're always here to help. </p>
    </div>

    <div>
        <img src={aboutUsImg} alt="Form Image" className="AboutImg"/>
    </div>
    </div>
    
 );
};

export default AboutUs;