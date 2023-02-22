import { Component } from "react";
import Resume from "./Resume";
import Side from "./Side";
import './App.css';
class App extends Component {

  render(){
    return (
      <div className="App">
        <Side/>
        <Resume/>
      </div>
    );
  }
}

export default App;
