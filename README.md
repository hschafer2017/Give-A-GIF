# Give a GIF 

This web app originally started out as a Hackathon Project, experimenting with RESTful APIs, using a [GIPHY API](https://developers.giphy.com/).

A live preview can be viewed [here](https://hschafer2017.github.io/Give-A-GIF/).

#### THIS IS FOR EDUCATIONAL PURPOSES ONLY. THERE WILL BE NO COMMERCIAL USE OF THIS PRODUCT.

Click on the 'Give a GIF' button to find a randomly generated GIF via the GIPHY API. 

A word is randomly generated using the npm package [random-words](https://www.npmjs.com/package/random-words). The word is then passed through the query string to search for GIFs relating to that word. The first GIF that is returned from that search result is rendered on the page.

This app uses HTML, CSS, JavaScript, React, Python, and Flask. The RESTful API is hosted on Heroku, while the API is called from the frontend that is hosted on GitHub pages. The [Material UI](https://material-ui.com/) Framework was used for styling. 
