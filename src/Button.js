import React, { Component } from 'react';
import { GIF_api } from './apiUtils'
import Button from '@material-ui/core/Button';

class GifButton extends Component {
    render () {
        return (
            <Button size="small" onClick={GIF_api} >Show Me the GIFs!</Button>
        );
    }
}

export default GifButton;