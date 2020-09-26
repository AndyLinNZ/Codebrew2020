import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import '../App.css';
import TextField from 'material-ui/TextField'
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="register">
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Make an Appointment" style={styles.appbar}/>
                    <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Email Address"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Phone Number"
                    floatingLabelText="Phone Number"
                    onChange={handleChange('phone')}
                    defaultValue={values.phone}
                    />
                    <br/>
                    <TextField
                    id="date"
                    floatingLabelText="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    onChange={handleChange('dob')}
                    />
                    <br/>
                    <TextField
                    id="datetime-local"
                    floatingLabelText="Next appointment"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    onChange={handleChange('time')}
                    />
                    <br/>
                    <Button variant="contained"
                    style={styles.button}
                    onClick={this.continue}
                    > Continue
                    </Button>
                    </React.Fragment>
            </MuiThemeProvider>
            </div>
        )
    }
}

const styles = {
    button: {
        margin: 30
    },
    appbar: {
        background: '#8c9496',
        flexGrow: 1,
        textAlign: 'center',
    },
}
export default FormUserDetails
