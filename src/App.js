import React, { Component } from "react";

import "./App.css";
//components
import AddStudent from "./Components/AddStudent";
import ClassListOutput from "./Components/ClassListOutput";
import ExamOutput from "./Components/ExamOutput";
import LoginForm from "./Components/LoginForm";
import TrueFalse from "./Components/TrueFalse";
import MultipleChoice from "./Components/MultipleChoice";

class App extends Component {
  //Add state property
  state = {
    studentName: "newjohn doe",
  };
  render() {
    return (
      <div className="App">
        <AddStudent />
        <ClassListOutput studentName={this.state.studentName} />
        {/* <MultipleChoice />
        <TrueFalse />
        <LoginForm /> */}
      </div>
    );
  }
}

export default App;
