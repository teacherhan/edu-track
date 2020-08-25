import React from "react";

const addStudent = (props) => {
  return (
    <div>
      <p>
        <label>Student's</label>
      </p>
      <input type="text" placeholder="Name" onChange={props.registerName} />
      <input
        type="text"
        placeholder="Last name"
        onChange={props.registerLastName}
      />
      <input type="text" placeholder="Class" onChange={props.selectClass} />
      <button type="button">Enroll</button>
    </div>
  );
};

export default addStudent;
