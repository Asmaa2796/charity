import { useContext } from "react";
import { events } from "../data";
import { LanguagesContext } from "../contextApi/LanguagesContext";
import { translate } from "../translations";

const UpcomingEvents = () => {
    const { language } = useContext(LanguagesContext);

    return (
        <div className="events py-5">
            <div className="container">
                <h4 className="title">{translate('events', language)}</h4>
                <div className="row">
                    {events && events.length >= 1 ? (
                        events.map((item) => (
                            <div className="col-lg-6 col-md-12 col-12" key={item.id} data-aos="fade-up">
                                <div className="event-card">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-4">
                                            <img
                                                src={`img/events/${item.photo}`}
                                                alt={item.photo}
                                            />
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-8">
                                            <h5>{language === 'ar' ? item.titleAr : item.title}</h5>
                                            <small className="d-block text-xs sub-color"><i className="fa fa-calendar"></i> {language === 'ar' ? item.dateAr : item.date}</small>
                                            <small className="d-block text-xs sub-color"><i className="fa fa-map-marker"></i> {language === 'ar' ? item.addressAr : item.address}</small>
                                            <hr className="my-1 border-secondary"/>
                                            <p className={`line-height text-secondary ${language === 'ar' ? 'text-m':'text-sm'} m-0`}>{language === 'ar' ? item.descAr : item.desc}</p>
                                        </div>
                                    </div>
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

export default UpcomingEvents;