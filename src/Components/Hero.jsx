import React from "react";
import "../images/Hero.jpg"
import Navbar from "./Navbar";
import icon from '../images/icons.png'

const Hero = () => {
    return (
        <div className="heroSection main">
            <Navbar />
            <div className="mx-auto maincontent">

                {/* Content */}
                <div className="w-4/5 herocontent py-4 px-6">
                    <h1 className="py-3 text-4xl font-extrabold">
                        Professional Family Health Care
                    </h1>
                    <p className="text-xs">
                    CREATE YOUR MEDICAL WEBSITE USING JEVELIN
                    </p>
                    <img className="py-5 w-44" src={icon}/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
