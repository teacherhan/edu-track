import React from "react";

const addStudent = (props) => {
  // Add some inline style
  const addStStyle = {
    border: "2px solid dodgerblue",
    borderRadius: "20px",
    boxShadow: "5px gray",
  };

  return (
    <div style={addStStyle}>
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
