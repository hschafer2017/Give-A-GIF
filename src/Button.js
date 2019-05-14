import React, { Component } from 'react';
import { GIF_api } from './apiUtils'
import Button from '@material-ui/core/Button';

const ButtonStyle = {
    marginTop: '10%',
}


class GifButton extends Component {
    render () {
        return (
                <Button variant="contained" style={ButtonStyle} color="default" onClick={GIF_api}>Find A GIF!</Button>
        );
    }
}

export default GifButton;