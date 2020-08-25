import React from "react";
import "./ClassListOutput.css";

const classListOutput = (props) => {
  return (
    <div className="ClassListOutput">
      <p> {props.studentName}</p>
      <p>{props.lastName}</p>
      <p>{props.regClass}</p>
    </div>
  );
};
export default classListOutput;
