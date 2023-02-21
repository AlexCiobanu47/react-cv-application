import { Component } from "react";
import EducationForm from "./EducationForm";
import GeneralInformationForm from "./GeneralInformationForm";

class App extends Component {

  render(){
    return (
      <div className="App">
        <GeneralInformationForm/>
        <EducationForm/>
      </div>
    );
  }
}

export default App;
