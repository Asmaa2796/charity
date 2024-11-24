import { useGetServicesQuery } from "../redux/api/charityApi";
import { LanguagesContext } from "../contextApi/LanguagesContext";
import { useContext } from "react";
import { translate } from "../translations";

const Services = () => {
  const { data: services, error, isLoading } = useGetServicesQuery();
  const { language } = useContext(LanguagesContext);

  return (
    <div className="services py-5">
      <div className="container">
        <h4 className="title">{translate("services", language)}</h4>

        <div className="row">
          {isLoading ? (
            <div></div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : services && services.length > 0 ? (
            services.map((item) => (
              <div
                className="col-lg-4 col-md-6 col-12"
                key={item.id}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service_card card px-3 py-4 text-center my-2">
                  <img src={`/img/services/${item.photo}`} alt={item.title} />
                  <h5 className="mb-0 text-color">
                    {language === "ar" ? item.arTitle : item.title}
                  </h5>
                  <p className="line-height mt-2 mb-0 text-secondary text-sm">
                    {language === "ar" ? item.arDesc : item.desc}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
