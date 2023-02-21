import React, {Component} from "react";

class WorkDisplay extends Component{
        render(){
            return(
                <div>
                    <p>{this.props.company}</p>
                    <p>{this.props.title}</p>
                    <p>{this.props.workStartDate}</p>
                    <p>{this.props.workEndDate}</p>
                </div>
            )
        }

}

export default WorkDisplay;