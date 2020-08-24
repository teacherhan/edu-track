import React from "react";

const addStudent = (props) => {
  return (
    <div>
      <p>
        <label>Student's</label>
      </p>
      <input type="text" placeholder="Name" onChange={props.register} />
      <input type="text" placeholder="Last name" />
      <input type="text" placeholder="Class" />
      <button type="button">Enroll</button>
    </div>
  );
};

export default addStudent;
