from flask import Flask, render_template, request
from flask_cors import CORS
from backend.nearby_hospitals import nearby_hospitals
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/location')
def index():
    
    long = request.args['longitude']
    lat = request.args['latitude']

    location = str(long) + "," + str(lat)

    hospitals = nearby_hospitals(location)
    return json.dumps({ "hospitals": hospitals })


if __name__ == '__main__':
    app.run()
