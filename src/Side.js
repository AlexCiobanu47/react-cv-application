import React, { Component } from "react";
import GeneralInformationForm from "./GeneralInformationForm";
import Skills from "./Skills";

class Side extends Component{

    render(){
        return(
            <div className="side">
                <GeneralInformationForm/>
                <Skills/>
            </div>
        )
    }
}
export default Side;