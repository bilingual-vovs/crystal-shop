import React, { Component } from 'react';
import "./Shop.css"

import ProductCard from '../ProductCard/ProductCard';

class Shop extends Component {
    render() {
        return (
            <div className='shop-box'>
                <h1>All product</h1>
                <div className='filters-box'>

                </div>
                <div className='shopping-box'>
                    <ProductCard/>
                </div>
                <button>View All</button>
            </div>
        );
    }
}

export default Shop;
