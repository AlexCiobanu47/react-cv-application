import { Component } from "react";
import EducationForm from "./EducationForm";
import GeneralInformationForm from "./GeneralInformationForm";
import WorkForm from "./WorkForm";
class App extends Component {

  render(){
    return (
      <div className="App">
        <GeneralInformationForm/>
        <EducationForm/>
        <WorkForm/>
      </div>
    );
  }
}

export default App;
