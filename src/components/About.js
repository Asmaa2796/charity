import { useGetAboutQuery } from "../redux/api/charityApi";
import { LanguagesContext } from "../contextApi/LanguagesContext";
import { useContext } from "react";
import { translate } from "../translations";

const About = () => {
  const { data: about, error, isLoading } = useGetAboutQuery();
  const { language } = useContext(LanguagesContext);

  return (
    <div className="about py-5">
      <div className="container">
        {isLoading ? (
          <div></div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : about && about.length > 0 ? (
          about.map((item) => (
            <div className="row" key={item.id}>
              <div className="col-lg-6 col-md-6 col-12">
                <h4 className="title text-white">
                  {translate("about", language)}
                </h4>

                <h5
                  className="my-2 text-white"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {language === "ar" ? item.titleAr : item.title}
                </h5>
                <p
                  className="line-height text-lighter my-3 text-sm"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  {language === "ar" ? item.desc1Ar : item.desc1}
                </p>
                <p
                  className="line-height text-lighter my-3 text-sm"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  {language === "ar" ? item.descAr : item.desc}
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="p-3 wrapp" data-aos="fade-up" data-aos-delay="300">
                  <img
                    src={"img/about/ab1.jpg"}
                    className="mx-auto w-100 d-block rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default About;
