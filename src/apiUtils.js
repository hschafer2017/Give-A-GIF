import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let randomWords = require('random-words');
let request = new XMLHttpRequest();

var tileData = []


function displayGIFNicely(apiData) {
    let apiResponseData = JSON.parse(apiData);

    Array(9).fill().map((_,i) => 
        tileData.push({
            img: `${apiResponseData.data[i].embed_url}`,
            cols: 2,
        })
    )
    return tileData
}


class GifGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tileData: []
        }
    }

    componentDidMount() {
    let request = new XMLHttpRequest();
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
        let tileDataLoaded = this.state.tileData.length > 0;
        console.log(tileDataLoaded)
        return(
            tileDataLoaded ?
            <ul>
            {this.state.tileData.map(
                tile => {
                    return <li>{ tile.img }</li>;
                })}
            </ul>
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

ReactDOM.render(
    <GifGrid />,
    document.getElementById('component-testing')
  );