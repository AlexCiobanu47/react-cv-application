import React , {Component} from "react";
import WorkDisplay from "./WorkDisplay"
class WorkForm extends Component{
    constructor(){
        super();

        this.state = {
            company: '',
            title: '',
            workStartDate: null,
            workEndDate: null,
        };
    }
    handleCompanyChange =(e) => {
        this.setState({
            company: e.target.value,
        })
    };
    handleTitleChange = (e) =>{
        this.setState({
            title: e.target.value,
        })
    }
    handleWorkStartDate = (e) =>{
        this.setState({
            workStartDate: e.target.value,
        })
    }
    handleWorkEndDate = (e) =>{
        this.setState({
            workEndDate: e.target.value,
        })
    }
    onSubmitInfo = (e) =>{
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitInfo}>
                    <fieldset>
                        <label htmlFor="">Company:</label>
                        <input
                            type = 'text'
                            onChange={this.handleCompanyChange}
                        />
                        <label htmlFor="">Title:</label>
                        <input
                            type = 'text'
                            onChange={this.handleTitleChange}
                        />
                        <label htmlFor="">Work start date:</label>
                        <input
                            type = 'date'
                            onChange={this.handleWorkStartDate}
                        />
                        <label htmlFor="">Work end date:</label>
                        <input
                            type = 'date'
                            onChange={this.handleWorkEndDate}
                        />
                        <button type = 'submit'>Submit</button>
                    </fieldset>
                </form>
                <WorkDisplay 
                    company = {this.state.company}
                    title = {this.state.title}
                    workStartDate = {this.state.workStartDate}
                    workEndDate = {this.state.workEndDate}
                />
            </div>
        )
    }
}

export default WorkForm;