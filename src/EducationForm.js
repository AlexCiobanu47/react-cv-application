import React , {Component} from "react";
class GeneralInformationForm extends Component{
    constructor(){
        super();

        this.state = {
            school: '',
            schoolStartDate: null,
            schoolEndDate: null,
            edit: false,
        };
    }
    handleSchoolChange =(e) => {
        this.setState({
            school: e.target.value,
        })
    };
    handleSchoolStartDateChange = (e) =>{
        this.setState({
            schoolStartDate: e.target.value,
        })
    }
    handleSchoolEndDateChange = (e) =>{
        this.setState({
            schoolEndDate: e.target.value,
        })
    }
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
            school,
            schoolStartDate,
            schoolEndDate,
            edit
        } = this.state;
        return(
            <div className="edu-info">
                <div className="school">
                    <h2>School:</h2>
                    <p>{school ? school : 'your school'}</p>
                </div>
                <div className="school-start">
                    <h2>School start date:</h2>
                    <p>{schoolStartDate ? schoolStartDate :'your school start date'}</p>
                </div>
                <div>
                    <h2>School end date:</h2>
                    <p>{schoolEndDate ? schoolEndDate : 'your school end date'}</p>
                </div>
                <button
                    type = "button"
                    onClick={this.toggleEdit}
                >
                    Edit
                </button>
                {edit &&
                    <div>
                        <form onSubmit={this.onSubmitInfo}>
                            <fieldset>
                                <label htmlFor="">School:</label>
                                <input
                                    type = 'text'
                                    onChange={this.handleSchoolChange}
                                />
                                <label htmlFor="">School start date:</label>
                                <input
                                    type = 'date'
                                    onChange={this.handleSchoolStartDateChange}
                                />
                                <label htmlFor="">School end date:</label>
                                <input
                                    type = 'date'
                                    onChange={this.handleSchoolEndDateChange}
                                />
                                <button type = 'submit'>Submit</button>
                            </fieldset>
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default GeneralInformationForm;