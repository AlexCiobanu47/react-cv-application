import React, {Component} from "react";
import EducationForm from "./EducationForm"
import WorkForm from "./WorkForm";

class Resume extends Component{

    render(){
        return(
            <div className="resume">
                <main>
                    <EducationForm/>
                    <WorkForm/>
                </main>
            </div>
        )
    }
}

export default Resume;