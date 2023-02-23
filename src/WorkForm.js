import React , {Component} from "react";
class WorkForm extends Component{
    constructor(){
        super();

        this.state = {
            company: '',
            title: '',
            workStartDate: null,
            workEndDate: null,
            edit: false,
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
        this.toggleEdit();
    }
    toggleEdit = (e) =>{
        this.setState(prevState =>({
            edit: !prevState.edit
        }))
    }
    render(){
        const {
            company,
            title,
            workStartDate,
            workEndDate,
            edit
        } = this.state
        return(
            <div className="work-info">
                <div className="work-input">
                    <div className="company-name">
                        <h2>Company:</h2>
                        <p>{company ? company: 'your company name'}</p>
                    </div>
                    <div className="position-title">
                        <h2>Title:</h2>
                        <p>{title ? title :'your title'}</p>
                    </div>
                    <div className="work-start">
                        <h2>Work start date:</h2>
                        <p>{workStartDate ? workStartDate : 'your work start date'}</p>
                    </div>
                    <div className="work-end">
                        <h2>Work end date:</h2>
                        <p>{workEndDate ? workEndDate :'your work end date'}</p>
                    </div>
                    <button
                        type = "button"
                        className="work-edit-button"
                        onClick={this.toggleEdit}
                    >
                        Edit
                    </button>
                </div>
                {edit &&
                    <div>
                        <form onSubmit={this.onSubmitInfo}>
                            <fieldset className="work-form">
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
                                <button 
                                    type = 'submit'
                                    className="work-submit-button"
                                    onClick={this.onSubmitInfo}
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

export default WorkForm;