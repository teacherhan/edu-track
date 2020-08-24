import React from "react";

const addStudent = () => {
  return (
    <div>
      <p>
        <label>Student's</label>
      </p>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Last name" />
      <input type="text" placeholder="Class" />
      <button type="button">Enroll</button>
    </div>
  );
};

export default addStudent;
