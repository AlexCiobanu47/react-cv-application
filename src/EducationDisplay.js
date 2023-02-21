import React, {Component} from "react";

class EducationDisplay extends Component{
        render(){
            return(
                <div>
                    <p>{this.props.school}</p>
                    <p>{this.props.schoolStartDate}</p>
                    <p>{this.props.schoolEndDate}</p>
                </div>
            )
        }

}

export default EducationDisplay;