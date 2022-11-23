import React, { Component } from 'react';

import vector from "./vector.png"
import "./BestPrice.css"

class BestPrice extends Component {
    render() {
        return (
            <div id="best-price-box">
                <img src={vector} alt=""/>
            </div>
        );
    }
}

export default BestPrice;
