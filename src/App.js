import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import './App.css';

function App() {
  // const [navLinks] = useState([
  //   {
  //     name: 'Home'
  //   },
  //   {
  //     name: 'About'
  //   },
  //   {
  //     name: 'Portfolio'
  //   },
  //   {
  //     name: 'Contact'
  //   }
  // ])

  const [navLinks] = useState(
    [
      'Home',
      'About',
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
          ? (<Home />)
          : currentLink === 'Portfolio' && !contactSelected
            ? (<Portfolio />)
            : currentLink === 'Contact' && contactSelected
              ? (<ContactForm />)
              : false
      }
    </main>
  );
}

export default App;
