import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData'

let randomWords = require('random-words');
let request = new XMLHttpRequest();

var tileDatas = tileData

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
  };

function displayGIFNicely(apiData) {
    let apiResponseData = JSON.parse(apiData);

    // Fill objects in tileDatas array with image URL from API response
    Array(tileDatas.length).fill().map((_,i) => 
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
    let search = randomWords({exactly:1, wordsPerString:2});
    request.open("GET", "https://giveagif.herokuapp.com/gifs/" + search);
    request.send();

    // Shows users what random words chose those GIFs
    document.getElementById('search-query').innerHTML = 
    `<h2>A random word generator searched for GIFs associated with these two words: ${search}.</h2>`

    }

    // Render Gif Grid with Gif from API response
    render() {
        let tileDataLoaded = Object.keys(tileData[1]).length > 0;
        return(
            tileDataLoaded ?
            <div style={styles.root}>
                <GridList style={styles.gridList} cellHeight={275} cols={3}>
                    {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <iframe src={tile.img} title='gif' height='279px'></iframe>
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
