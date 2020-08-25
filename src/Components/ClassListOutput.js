import React from "react";

const classListOutput = (props) => {
  return (
    <div>
      <p> {props.studentName}</p>
      <p>{props.lastName}</p>
      <p>{props.regClass}</p>
    </div>
  );
};
export default classListOutput;
