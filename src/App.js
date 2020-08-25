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
    studentName: "Name",
    lastName: "Lastname",
    regClass: "Class",
  };

  sNameRegHandler = (event) => {
    this.setState({ studentName: event.target.value });
  };
  sLastNameRegHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  selectClassHandler = (event) => {
    this.setState({ regClass: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <AddStudent
          registerName={this.sNameRegHandler}
          registerLastName={this.sLastNameRegHandler}
          selectClass={this.selectClassHandler}
        />
        <ClassListOutput
          studentName={this.state.studentName}
          lastName={this.state.lastName}
          regClass={this.state.regClass}
        />
      </div>
    );
  }
}

export default App;
