import React from 'react';
import logo from './logo.svg';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';



function App() {
  return (
    <div className="App">
      <Subject title ="WEB" sub="world wide web!" />
      <TOC />
    </div>
  );
}



export default App;
