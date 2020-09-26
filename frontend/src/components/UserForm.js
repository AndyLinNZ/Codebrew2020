import React, { Component } from 'react'
import FormUserDetails from "./FormUserDetails"
import Confirm from "./Confirm"
import Success from "./Success"

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        time: "2017-05-24T10:30",
        dob: "2017-05-24",
        clinicName: this.props.clinicName
    }
    // Proceed to next step
    nextStep =() => {
        const {step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep =() => {
        const {step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    render() {
        const {step} = this.state;
        const {firstName, lastName, email, phone, time, dob, clinicName} = this.state;
        const values = {firstName, lastName, email, phone, time, dob, clinicName}
        
        if (step === 1) {
                return (
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
        }
        else if (step === 2) {
                return <h1><Confirm
                nextStep={this.nextStep}
                values={values}
                prevStep={this.prevStep}
                /></h1>
        }
        else if (step === 3) {
                return <h1><Success/></h1>
        }
    }
}

export default UserForm
