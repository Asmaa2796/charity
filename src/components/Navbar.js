import { useContext, useState, useEffect } from "react";
import { LanguagesContext } from "../contextApi/LanguagesContext";
import { translate } from "../translations/index";
const Navbar = ({ scrollToSection, refs }) => {
  const [bgWhite, setBgWhite] = useState(false);
  const { language, toggleLanguage } = useContext(LanguagesContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setBgWhite(true);
      } else {
        setBgWhite(false);
      }
    });
  }, []);
  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${bgWhite ? 'bg-white py-1 shadow-sm':'bg-transparent'}`}>
        <div className="container">
          <span className="navbar-brand">
            <img src={"/logo.png"} alt="Logo" />
          </span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto p-0">
              <li
                className="nav-item"
                onClick={() => {
                  scrollToSection(refs.heroRef);
                }}
              >
                <span className="nav-link">{translate("home", language)}</span>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  scrollToSection(refs.aboutRef);
                }}
              >
                <span className="nav-link">{translate("about", language)}</span>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  scrollToSection(refs.servicesRef);
                }}
              >
                <span className="nav-link">
                  {translate("services", language)}
                </span>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  scrollToSection(refs.upcomingEventsRef);
                }}
              >
                <span className="nav-link">
                  {translate("events", language)}
                </span>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  scrollToSection(refs.contactsRef);
                }}
              >
                <span className="nav-link">
                  {translate("contacts", language)}
                </span>
              </li>
            </ul>
          </div>
          <button
            className={`button shadow-sm ${
              language === "en" ? "arabic" : "english"
            }`}
            onClick={toggleLanguage}
          >
            <i className="fa fa-globe"></i>{" "}
            {language === "en" ? translate("arabic", language) : "English"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
