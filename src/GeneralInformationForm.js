import React , {Component} from "react";

class GeneralInformationForm extends Component{
    constructor(){
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            edit: '',
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
        this.toggleEdit();
    }
    toggleEdit = (e) =>{
        this.setState(prevState =>({
            edit: !prevState.edit
        }))
    }
    render(){
        const {
            firstName,
            lastName,
            email,
            phone,
            edit,
        } = this.state;
        return(
            <div className="general-info">
                <div className="inputInfo">
                    <div className="firstName">
                        <h2>First name:</h2>
                        <p>{firstName ? firstName : 'your first name'}</p>
                    </div>
                    <div className="lastName">
                        <h2>Last Name:</h2>
                        <p>{lastName ? lastName :'your last name'}</p>
                    </div>
                    <div>
                        <h2>Email:</h2>
                        <p>{email ? email : 'your email'}</p>
                    </div>
                    <div>
                        <h2>Phone:</h2>
                        <p>{phone ? phone :'your phone'}</p>
                    </div>
                    <button
                        type = "button"
                        className="general-edit-button"
                        onClick={this.toggleEdit}
                    >
                    Edit
                    </button>
                </div> 
                    
                {edit &&
                    <div> 
                        <form onSubmit={this.onSubmitInfo}>
                            <fieldset className="general-info-form">
                                <label htmlFor="">First name:</label>
                                <input
                                    type = 'text'
                                    onChange={this.handleFirstNameChange}
                                    value = {firstName}
                                />
                                <label htmlFor="">Last name:</label>
                                <input
                                    type = 'text'
                                    onChange={this.handleLastNameChange}
                                    value = {lastName}
                                />
                                <label htmlFor="">Email:</label>
                                <input
                                    type = 'email'
                                    onChange={this.handleEmailChange}
                                    value = {email}
                                />
                                <label htmlFor="">Phone number:</label>
                                <input
                                    type = 'text'
                                    onChange={this.handlePhoneChange}
                                    value = {phone}
                                />
                                <button 
                                    type = 'submit'
                                    className="general-submit-button"
                                    >
                                        Submit
                                </button>
                            </fieldset>
                        </form> 
                    </div>
                }
            </div>
        )
    }
}

export default GeneralInformationForm;