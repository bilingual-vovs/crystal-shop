import React, { Component } from 'react';

import "./Landing.css"
import wave from "./Wave.svg"
import Header from '../Header/Header';

class Landing extends Component {
    render() {
        return (
            <div id='landing'>
                <Header/>
                <img id='landing-img' src={wave} alt="" />
            </div>
        );
    }
}

export default Landing;
