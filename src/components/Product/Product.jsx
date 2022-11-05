import React, { Component } from 'react';
import pick from "./pick.png"
import "./Product.css"

class Product extends Component {
    render() {
        return (
            <div className='product'>
                <img src={pick} alt="" />
                <p>Crystal Agate Phone Grip <p id='price'>- 18.99$</p></p>
            </div>
        );
    }
}

export default Product;
