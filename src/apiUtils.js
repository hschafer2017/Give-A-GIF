import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData'

let randomWords = require('random-words');
let request = new XMLHttpRequest();

var tileDatas = tileData
export const search = randomWords({exactly:1, wordsPerString:2});

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'scroll',
    },
    gridList: {
      width: '50vw',
      height: '100%',
    },
    gridListTile: {
        height: '150px',
        alignItems: 'stretch',
        justifyContent: 'center',
    }
  };

function displayGIFNicely(apiData) {
    let apiResponseData = JSON.parse(apiData);

    Array(24).fill().map((_,i) => 
        tileDatas[i]['img'] = `${apiResponseData.data[i].embed_url}`,
    )
    return tileDatas
}


class GifGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tileDatas: []
        }
    }

    // Fetch API data after all other components are loaded
    componentDidMount() {
    var self = this;

        request.onreadystatechange = function(e){
            if (this.readyState === 4 && this.status === 200) {
                self.setState({
                tileData : displayGIFNicely(this.responseText)
                });
            }
            else if (this.readyState === 4 && this.status === 404) {
            }
        }

    // Send search request to API with random search words
    request.open("GET", "https://giveagif.herokuapp.com/gifs/" + search);
    request.send();

    }

    // Render Gif Grid with Gif from API response
    render() {
        let tileDataLoaded = Object.keys(tileData[1]).length > 0;
        return(
            tileDataLoaded ?
            <div style={styles.root}>
                <GridList style={styles.gridList} cellHeight={150} cols={3}>
                    {tileData.map(tile => (
                    <GridListTile key={tile.img} style={styles.gridListTile} cols={tile.cols || 1}>
                        <iframe src={tile.img} title='gif' frameBorder='0' allowFullScreen></iframe>
                    </GridListTile>
                    ))}
                </GridList>
            </div>
            :
            <div>Your Gifs Are Loading...</div>
        );
    }
  }


// Reload page on function call to call API
export function GIF_api() {
    window.location.reload(); 
    return false;
}

export default GifGrid
