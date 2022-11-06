import React, { Component } from 'react';

import './App.css'

import Landing from './Landing/Landing';
import Shop from './Shop/Shop';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Landing/>
                <Shop/>
            </React.Fragment>
        );
    }
}

export default App;