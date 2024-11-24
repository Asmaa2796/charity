import { useContext } from "react";
import { LanguagesContext } from "../contextApi/LanguagesContext";
import { translate } from "../translations";

const Statistics = () => {
  const { language } = useContext(LanguagesContext);

  return (
    <div className="stats">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-12" data-aos="fade-up" data-aos-delay="300">
            <h4 className="title line-height">
              {translate("stTitle", language)}
            </h4>
            <p className="line-height" data-aos="fade-up" data-aos-delay="300">{translate("stats", language)}</p>
          </div>
          <div className="col-lg-7 col-md-12 col-12">
            <div className="counts row">
              <div className="col-lg-4 col-md-4 col-12 text-center" data-aos="fade-up" data-aos-delay="300">
                <img src={"img/stats/state1.png"} alt="" />
                <b className="d-block">500</b>
                <h5>{translate("childrenSupported", language)}</h5>
              </div>
              <div className="col-lg-4 col-md-4 col-12 text-center" data-aos="fade-up" data-aos-delay="500">
                <img src={"img/stats/state2.png"} alt="" />
                <b className="d-block">1,200</b>
                <h5>{translate("mealsProvided", language)}</h5>
              </div>
              <div className="col-lg-4 col-md-4 col-12 text-center" data-aos="fade-up" data-aos-delay="700">
                <img src={"img/stats/state3.png"} alt="" />
                <b className="d-block">30</b>
                <h5>{translate("volunteerTeams", language)}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
