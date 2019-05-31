import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import GifGrid from './apiUtils.js'
import IntroCard from './IntroCard.js'
import ControlledExpansionPanels from './Expansion.js'
import GifNavBar from './NavBar.js'


ReactDOM.render(<GifNavBar/>, document.getElementById('navbar'));
ReactDOM.render(<GifGrid />, document.getElementById('gif-images'));
ReactDOM.render(<IntroCard />, document.getElementById('query-card'));
ReactDOM.render(<ControlledExpansionPanels/>, document.getElementById('help-panel'));