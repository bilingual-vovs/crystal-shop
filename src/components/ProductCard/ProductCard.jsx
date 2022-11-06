import React, { Component } from 'react';
import "./ProductCard.css"

import pick from "./pick.png"

class ProductCard extends Component {
    render() {
        return (
            <div className='product-cards'>
                <img className='centered' src={pick} alt="" />
                <p className='name centered'>CRYSTAL AGATE PHONE GRIP</p>
                <p className='price centered' >18.99$</p>
                <div className='border centered'>
                    <button><p className='btn-p'>BUY NOW</p></button>
                </div>
                
            </div>
        );
    }
}

export default ProductCard;
