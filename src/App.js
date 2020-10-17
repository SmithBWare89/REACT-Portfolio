import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  const [navLinks] = useState([
    {
      name: 'Home'
    },
    {
      name: 'About'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    }
  ])
  const [currentLink, setCurrentLink] = useState(navLinks[0].name);
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
        !contactSelected
          ? (
            <>
              <Portfolio />
            </>
          ) : (
            <ContactForm />
          )
      }
    </main>
  );
}

export default App;
