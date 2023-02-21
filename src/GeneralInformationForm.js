import React , {Component} from "react";
import GeneralInformationDisplay from "./GeneralInformationDisplay";

class GeneralInformationForm extends Component{

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="">First name:</label>
                    <input
                        type = 'text'
                    />
                    <label htmlFor="">Last name:</label>
                    <input
                        type = 'text'
                    />
                    <label htmlFor="">Email:</label>
                    <input
                        type = 'email'
                    />
                    <label htmlFor="">Phone number:</label>
                    <input
                        type = 'text'
                    />
                    <button type = 'submit'>Submit</button>
                </form>
                <GeneralInformationDisplay/>
            </div>
        )
    }
}

export default GeneralInformationForm;