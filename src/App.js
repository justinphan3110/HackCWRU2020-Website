import React, { Component } from 'react';
import Logo from './components/Logo.js';
import Content from "./components/Content.js";
import headerBackground from "./Assets/backgrounds/Header_Section_Background.svg";
import './App.css';
import Countdown from './components/Countdown.js';

class App extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className = "App" >
        <section className = "introduction" style={{ backgroundImage: `url(${headerBackground})` }}>
          <Countdown HackDate = 'Feb 15, 2020 21:00:00'/>
          <Content />
        </section>
      </div>
    );
  }
}

export default App;
