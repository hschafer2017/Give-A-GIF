import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import GifButton from './Button.js'
import GifGrid from './Grid.js'


ReactDOM.render(<GifButton />, document.getElementById('gif-button'));
ReactDOM.render(<GifGrid />, document.getElementById('gif-images'));