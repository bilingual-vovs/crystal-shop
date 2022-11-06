import React, { Component } from 'react';
import "./Slider.css"
import Product from '../Product/Product';

import lft from "./Arrow_left.png"
import rt from "./Arrow_right.png"

class Slider extends Component {

    state = {x: 0}

    inc = () => {
        this.setState(({x}) => {
            if (x === 0){
                return {x: 6}
            }
            else{
                return {x: x-1}
            }
        })
    }

    dec = () => {
        this.setState(({x}) => {
            if (x === 6){
                return {x: 0}
            }
            else{
                return {x: x+1}
            }
        })
    }

    render() {
        let { state: {x}, inc, dec } = this
        return (
            <div className='slider-box'>
                <Product/>
                <div id='slider'>
                <img onClick={inc} src={lft} alt="" />
                {
                    [0,1,2,3,4,5,6].map(elm=>{
                        return (elm === x ? <div key={elm} className='active circle-indicator'/> : <div key={elm} className='circle-indicator'/>)
                    })
                }
                <img onClick={dec} src={rt} alt="" />
                </div>
            </div>
        );
    }
}

export default Slider;
