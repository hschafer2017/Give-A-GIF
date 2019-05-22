import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import GifButton from './Button.js'
import GifGrid from './apiUtils.js'
import IntroCard from './IntroCard.js'
// import ControlledExpansionPanels from './Expansion.js'


ReactDOM.render(<GifButton />, document.getElementById('gif-button'));
ReactDOM.render(<GifGrid />, document.getElementById('gif-images'));
ReactDOM.render(<IntroCard />, document.getElementById('query-card'));
// ReactDOM.render(<ControlledExpansionPanels/>, document.getElementById('gif-images'));