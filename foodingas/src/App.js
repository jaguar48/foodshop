import './App.css';
import React, { Component } from 'react';

import Main from './Components/MainComponent';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (

            <
            BrowserRouter >
            <
            div className = "App" >
            <
            Main / >
            <
            /div> < /
            BrowserRouter >
        );
    }
}
export default App;