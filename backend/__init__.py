from flask import Flask, render_template, flash, request, url_for, redirect, session
from flask_mail import Mail, Message
from wtforms import Form, BooleanField, TextField, PasswordField, validators
import gc
from CodeBrew.nearby_hospitals import nearby_hospitals

app = Flask(__name__)

class RegistrationForm(Form):
    fullname = TextField('Full Name', [validators.Length(min=4, max=100)])
    email = TextField('Email Address', [validators.Length(min=6, max=50)])
    dob = DateField('Date of Birth', format='%d/%m/%Y')
    phone = TextField('Phone Number', [validators.Length(min=7, max=12)])
    appointmentTime = DateTimeField('Appointment Time', format='%d/%m/%Y/%H/%M')


@app.route('/register/', methods=["POST"])
def register_page():
    try:
        form = RegistrationForm(request.form)

        if request.method == "POST" and form.validate():
            fullname  = form.fullname.data
            email = form.email.data
            dob = form.dob.data
            phone = form.phone.data
            appointmentTime = form.appointmentTime.data
            "fullname\n"

    except Exception as e:
        return(str(e))

@app.route('/location')
def index():
    
    long = request.args['longitude']
    lat = request.args['latitude']

    location = str(long) + "," + str(lat)


    hospitals = nearby_hospitals(location)
    return render_template("index.html", data = hospitals[:10])

if __name__ == '__main__':
    app.run()
