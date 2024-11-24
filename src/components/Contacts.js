import { contacts } from "../data";
import Footer from "./Footer";
const Contacts = () => {
  return (
    <>
      <div className="contact pt-3">
        <div className="container">
          <ul className="list-unstyled p-0">
            {contacts && contacts.length >= 1 ? (
              contacts.map((li) => (
                <li key={li.id}>
                  {li.id === 1 ? (
                    <a target="_blank" rel="noopener noreferrer" href={`mailto:${li.txt}`}>
                    <span className="d-block text-lighter text-sm">
                      <i className={li.icon}></i>
                    </span>
                  </a>
                  ):(
                    <a target="_blank" rel="noopener noreferrer" href={li.to}>
                    <span className="d-block text-lighter text-sm">
                      <i className={li.icon}></i>
                    </span>
                  </a>
                  )}
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contacts;
