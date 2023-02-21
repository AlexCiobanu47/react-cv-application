import React, {Component} from "react";

class GeneralInformationDisplay extends Component{
    constructor(props){
        super(props);
    }
        render(){
            return(
                <div>
                    <p>{this.props.firstName}</p>
                    <p>{this.props.lastName}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.phone}</p>
                </div>
            )
        }

}

export default GeneralInformationDisplay;