from flask import Flask, render_template, request
from CodeBrew.nearby_hospitals import nearby_hospitals

app = Flask(__name__)

@app.route('/location')
def index():
    
    long = request.args['longitude']
    lat = request.args['latitude']

    location = str(long) + "," + str(lat)


    hospitals = nearby_hospitals(location)
    return render_template("index.html", data = hospitals[:10])

if __name__ == '__main__':
    app.run()
