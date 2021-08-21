import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio/';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [navLinks] = useState(
    [
      'About Me',
      'Resume',
      'Portfolio',
      'Contact'
    ]
  )

  const [currentLink, setCurrentLink] = useState(navLinks[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <main>
      <Nav 
        navLinks={navLinks}
        setCurrentLink={setCurrentLink}
        currentLink={currentLink}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      {
        currentLink === 'About Me' && !contactSelected
          ? <AboutMe />
          : currentLink === 'Resume' && !contactSelected
            ? <Resume />
            : currentLink === 'Portfolio' && !contactSelected
              ? <Portfolio />
              : <Contact />
      }
      <Footer />
    </main>
  );
}

export default App;
