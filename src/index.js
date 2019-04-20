import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { GIF_api } from './apiUtils'
import Button from '@material-ui/core/Button';

class GifButton extends React.Component {
    render () {
        return (
                <Button variant="contained" color="default" onClick={GIF_api}>Find A GIF!</Button>
        );
    }
}

ReactDOM.render(<GifButton />, document.getElementById('gif-button'));
