import { useContext } from "react";
import { LanguagesContext } from "../contextApi/LanguagesContext";
import { translate } from "../translations";

const Footer = () => {
    const {language} = useContext(LanguagesContext);
    return (
        <div className="footer text-sm py-2 text-center text-lighter">
            <div className="container">
               Asmaa Saad | {translate('rights',language)}
            </div>
        </div>
    );
}

export default Footer;
