import React , {Component} from "react";
import EducationDisplay from "./EducationDisplay"
class GeneralInformationForm extends Component{
    constructor(){
        super();

        this.state = {
            school: '',
            schoolStartDate: null,
            schoolEndDate: null,
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
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitInfo}>
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
                </form>
                <EducationDisplay 
                    school = {this.state.school}
                    schoolStartDate = {this.state.schoolStartDate}
                    schoolEndDate = {this.state.schoolEndDate}
                />
            </div>
        )
    }
}

export default GeneralInformationForm;