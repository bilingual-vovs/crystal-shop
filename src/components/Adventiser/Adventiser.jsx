import React, { Component } from 'react';
import "./Adventiser.css"

class Adventiser extends Component {
    render() {
        return (
            <div className='adventiser'>
                <h1>Welcome to<br/><b>Pop Rock Crystal Shop!</b></h1> 
                <h2>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</h2>
                <button>Shop now</button>
                <a href="#">about us</a>
            </div>
        );
    }
}

export default Adventiser;
