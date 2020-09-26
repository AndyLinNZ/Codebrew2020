from flask import Flask, render_template
from CodeBrew.nearby_hospitals import nearby_hospitals

app = Flask(__name__)

@app.route('/')
def index(location):
    
    hospitals = nearby_hospitals(location)
    return render_template('index.html', data = hospitals)

app.run()