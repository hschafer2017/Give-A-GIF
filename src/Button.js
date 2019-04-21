import React, { Component } from 'react';
import { GIF_api } from './apiUtils'
import Button from '@material-ui/core/Button';

class GifButton extends Component {
    render () {
        return (
                <Button variant="contained" color="default" onClick={GIF_api}>Find A GIF!</Button>
        );
    }
}

export default GifButton;