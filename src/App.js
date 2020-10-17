import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import './App.css';

function App() {
  return (
    <main>
      <Nav />
      <ContactForm />
    </main>
  );
}

export default App;
