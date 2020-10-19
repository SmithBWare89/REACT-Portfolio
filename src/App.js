import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio/';
import Home from './components/Home';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [navLinks] = useState(
    [
      'Home',
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
        currentLink === 'Home' && !contactSelected
          ? <Home />
          : currentLink === 'Resume' && !contactSelected
            ? <Resume />
            : currentLink === 'Portfolio' && !contactSelected
              ? <Portfolio />
              : <Contact />
      }
    </main>
  );
}

export default App;
