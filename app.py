import os
import requests
from flask import Flask, jsonify
from flask_cors import cross_origin
import json


app = Flask(__name__)

@app.route("/gifs/<search>")
@cross_origin() # allow all origins all methods.
def gifrandom(search):
    r = requests.get("https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key="+ os.getenv('API_KEY'), verify=False).json()
    return jsonify(r)


if __name__ == '__main__':
     app.run(host=os.getenv('IP', '0.0.0.0'), port=int(os.getenv('PORT', 8080)), debug=True)
