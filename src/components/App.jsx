import React, { Component } from 'react';

import './App.css'

import Landing from './Landing/Landing';
import Shop from './Shop/Shop';
import BestPrice from './BestPrice/BestPrice';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Landing/>
                <Shop/>
                <BestPrice/>
            </React.Fragment>
        );
    }
}

export default App;