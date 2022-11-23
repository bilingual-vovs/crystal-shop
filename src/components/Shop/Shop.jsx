import React, { Component } from 'react';
import "./Shop.css"
import arrow from "./Arrow.png"

import ProductCard from '../ProductCard/ProductCard';

class Shop extends Component {

    state = {
        products: 8
    }

    render() {
        let {products} = this.state
        let productsArr = []
        
        let x = window.screen.width / 480
        for (let i = 0; i<Math.ceil(products/x); i++){
            let arr = []
            for (let i = 0; i<x; i++){
                arr.push(<ProductCard/>)
            }
            productsArr.push(<div className='container'>{arr}</div>)
        }
        return (
            <div className='shop-box'>
                <h1>All product</h1>
                <div className='filters-box'>
                    <p id='two'>Filter: </p><p id='one'> All products</p> <img src={arrow} alt="" />
                    <p id='two'>Filter: </p><p id='one'> All products</p> <img src={arrow} alt="" />
                </div>
                <div className='shopping-box'>
                    {productsArr}
                </div>
            </div>
        );
    }
}

export default Shop;
