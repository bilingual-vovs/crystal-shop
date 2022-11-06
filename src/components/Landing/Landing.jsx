import React, { Component } from 'react';

import "./Landing.css"
import wave from "./Wave.svg"
import Header from '../Header/Header';
import Adventiser from '../Adventiser/Adventiser';
import Slider from '../Slider/Slider';

class Landing extends Component {
    render() {
        return (
            <div id='landing'>
                <Header/>
                <Adventiser/>
                <Slider/>
                <img id='landing-img' src={wave} alt="" />
            </div>
        );
    }
}

export default Landing;
