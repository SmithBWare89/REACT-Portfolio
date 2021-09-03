import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio/';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Footer from './components/Footer';
// import SkillImages from './components/SkillImages';
import './App.css';

function App() {
  const [navLinks] = useState(
    [
      'About Me',
      'Resume',
      'Portfolio',
      // 'Skills',
      'Contact',
    ]
  )

  const [currentLink, setCurrentLink] = useState(navLinks[0]);

  return (
    <main>
      <Nav 
        navLinks={navLinks}
        setCurrentLink={setCurrentLink}
        currentLink={currentLink}
      />
      {
        currentLink === 'About Me'
          ? <AboutMe />
          : currentLink === 'Resume'
            ? <Resume />
            : currentLink === 'Portfolio'
              ? <Portfolio />
              // : currentLink === 'Skills'
              // ? <SkillImages />
                : currentLink === 'Contact'
                  ? <Contact />
                  : false
      }
      <Footer />
    </main>
  );
}

export default App;
