import React, { Component } from 'react';
import { GIF_api } from './apiUtils'
import Button from '@material-ui/core/Button';

const ButtonStyle = {
    marginTop: '10%',
    height: '30%',
    width: '40%',
}


class GifButton extends Component {
    render () {
        return (
                <Button variant="contained" style={ButtonStyle} color="default" onClick={GIF_api} >Show Me the GIFs!</Button>
        );
    }
}

export default GifButton;