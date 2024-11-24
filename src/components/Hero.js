import React, { useContext } from "react";
import { translate } from "../translations/index";
import { LanguagesContext } from "../contextApi/LanguagesContext";

const Hero = () => {
  const {language} = useContext(LanguagesContext);
  return (
    <div className="hero py-5">
      <div className="container">
      <div className="hero-text">
              <h1 data-aos="fade-up" className="text-light">{translate('together',language)}</h1>
              <p data-aos="fade-up" data-aos-delay="300" className="line-height text-lighter">
              {translate('we',language)}
              </p>
            </div>
      </div>
    </div>
  );
};

export default Hero;
