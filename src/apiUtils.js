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

    Array(10).fill().map((_,i) => 
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

    let search = randomWords({exactly:1, wordsPerString:2});
    request.open("GET", "https://giveagif.herokuapp.com/gifs/" + search);
    request.send();

    }

    render() {
        let tileDataLoaded = Object.keys(tileData[1]).length > 0;
        return(
            tileDataLoaded ?
            <div style={styles.root}>
                <GridList style={styles.gridList} cellHeight={275} cols={3}>
                    {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <iframe src={tile.img}></iframe>
                    </GridListTile>
                    ))}
                </GridList>
            </div>
            :
            <div>Your Gifs Are Loading...</div>
        );
    }
  }


// API KEY USING RANDOM GENERATOR FOR SEARCHED GIFS
export function GIF_api() {
    let search = randomWords({exactly:1, wordsPerString:2});
    request.open("GET", "https://giveagif.herokuapp.com/gifs/" + search);
    request.send();
    return false;
}


export default GifGrid
