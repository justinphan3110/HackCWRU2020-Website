import React, { Component } from 'react';
import SpartonLogo from '../Assets/Pixelated Spartron.svg';

class Logo extends Component{
    render() {
        return (
            <div className="myLogo">
                <div className ="spartonLogo">
                    <img src={SpartonLogo} />
                </div>
            </div>
        )
    }
}

export default Logo;