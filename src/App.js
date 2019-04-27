import React, { Component } from 'react';
import Logo from './components/Logo.js';
import Content from "./components/Content.js";
import headerBackground from "./Assets/backgrounds/Header_Section_Background.svg";
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className = "App">
        <section className = "introduction" style={{ backgroundImage: `url(${headerBackground})` }}>
          <Content />
        </section>
      </div>
    );
  }
}

export default App;
