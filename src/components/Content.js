import React, { Component } from 'react';
import hackCWRUTitle from '../Assets/Title.svg';
import subTitle from '../Assets/Subtitle 2020.svg';
import buttonUp from '../Assets/register button up.svg';
import Logo from './Logo.js';

class Content extends Component {
    render() {
        return (
          <div className = "mainContent" >
            <div className = "header">  
                <img id = "CWRUTitle" src =  {hackCWRUTitle}/>  
                <img id = "subTitle"  src = {subTitle}/>
                <Logo />
                <h3 id = "CWRU">Case Western Reserve University</h3>
                <h4 id = "date">February 15-17th 2020 </h4>  <br/><br/>
                <h1 id = "comingSoon"> Coming Soon...! </h1>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
          </div>  
        );
    }
}

export default Content;