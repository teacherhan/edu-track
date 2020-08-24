import React from "react";

import "./App.css";
//components
import AddStudent from "./Components/AddStudent";
import ClasListOutput from "./Components/ClassListOutput";
import ExamOutput from "./Components/ExamOutput";
import LoginForm from "./Components/LoginForm";
import TrueFalse from "./Components/TrueFalse";
import MultipleChoice from "./Components/MultipleChoice";

function App() {
  return (
    <div className="App">
      <AddStudent />
      <MultipleChoice />
      <TrueFalse />
      <LoginForm />
    </div>
  );
}

export default App;
