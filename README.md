# Give a GIF 

This web app originally started out as a Hackathon Project, experimenting with RESTful APIs, using a [GIPHY API](https://developers.giphy.com/).


#### THIS IS FOR EDUCATIONAL PURPOSES ONLY. THERE WILL BE NO COMMERCIAL USE OF THIS PRODUCT.

Click on the 'Give a GIF' button to find a randomly generated GIF via the GIPHY API. 

This application is designed with the following user stories in mind: 
- As a user, I want to view funny GIFs. 
- As a user, I don't want to repeatedly see the same GIFs featured. 
- As a user, I want to be able to send a funny GIF that I find and share it with others.
- As a user, I want to be able to scroll through many GIFs associated with the random words.
- As a user, I want to be able to view the GIFs in a readible, easy-to-consume fashion


Two words are randomly generated using the npm package [random-words](https://www.npmjs.com/package/random-words). These two random words are then passed through the query string to search for GIFs relating to those words. The top 24 GIFs associated with those two words will appear in the grid. 

If a user wants to share the GIFs, they can hover over (desktop) or click (mobile) on the GIF, where users can find options to share the GIF with others via social media or other messaging platforms. 

This app uses HTML, CSS, JavaScript, React, Python, and Flask. The RESTful API is hosted on Heroku, while the API is called from the frontend that is hosted on GitHub pages. The [Material UI](https://material-ui.com/) Framework was used for styling. 

It is responsive on mobile, tablet, and desktop devices. On mobile devices, the user will find information about the GIFs generated at the top of the page, with the GIFs displayed in a grid underneath. On desktop and tablet view, the user will see information about the GIFs generated on the left half of the screen, with the photo grid displayed on the right. 

#### Features Left to Implement 

A few features left to implement are to give the user options of different categories of GIFs to search for (e.g. Funny, Dogs, Sports, etc)
