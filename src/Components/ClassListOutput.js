import React from "react";
import "./ClassListOutput.css";
import * as ReactBootStrap from "react-bootstrap";

const classListOutput = (props) => {
  return (
    <div className="ClassListOutput">
      Class List <hr />
      <ReactBootStrap.Table stripped bordered hover>
        <thead>
          <tr>
            <th>NO#</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>CLASS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td> {props.studentName}</td>
            <td>{props.lastName}</td>
            <td>{props.regClass}</td>
          </tr>
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};
export default classListOutput;
