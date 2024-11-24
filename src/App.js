import { useEffect } from 'react';
import './App.css';
// import './ar.css';
import Home from './components/Home';
import Aos from 'aos';
import "aos/dist/aos.css";
import LanguagesProvider, { LanguagesContext } from './contextApi/LanguagesContext';
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <LanguagesProvider>
      <LanguagesContext.Consumer>
        {({ language }) => (
          <div className={language === 'ar' ? 'arabic' : 'english'}>
            <Home />
          </div>
        )}
      </LanguagesContext.Consumer>
    </LanguagesProvider>
  );
}

export default App;
