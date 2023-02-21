import React , {Component} from "react";
import GeneralInformationDisplay from "./GeneralInformationDisplay";

class GeneralInformationForm extends Component{
    constructor(){
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        };
    }
    handleFirstNameChange =(e) => {
        this.setState({
            firstName: e.target.value,
        })
    };
    handleLastNameChange =(e) => {
        this.setState({
            lastName: e.target.value,
        })
    };
    handleEmailChange =(e) => {
        this.setState({
            email: e.target.value,
        })
    };
    handlePhoneChange =(e) => {
        this.setState({
            phone: e.target.value,
        })
    };
    onSubmitInfo = (e) =>{
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitInfo}>
                    <label htmlFor="">First name:</label>
                    <input
                        type = 'text'
                        onChange={this.handleFirstNameChange}
                    />
                    <label htmlFor="">Last name:</label>
                    <input
                        type = 'text'
                        onChange={this.handleLastNameChange}
                    />
                    <label htmlFor="">Email:</label>
                    <input
                        type = 'email'
                        onChange={this.handleEmailChange}
                    />
                    <label htmlFor="">Phone number:</label>
                    <input
                        type = 'text'
                        onChange={this.handlePhoneChange}
                    />
                    <button type = 'submit'>Submit</button>
                </form>
                <GeneralInformationDisplay 
                    firstName = {this.state.firstName}
                    lastName = {this.state.lastName}
                    email = {this.state.email}
                    phone = {this.state.phone}
                />
            </div>
        )
    }
}

export default GeneralInformationForm;