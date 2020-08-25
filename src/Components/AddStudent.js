import React from "react";

const addStudent = (props) => {
  // Add some inline style
  const addStStyle = {
    border: "2px solid #8C489F",
    borderRadius: "20px",
    boxShadow: "5px 10px #443266",
    background: "#C3C3E5",
  };

  return (
    <div style={addStStyle}>
      <p>Register New Student</p>
      <hr />
      <input type="text" placeholder="Name" onChange={props.registerName} />
      <input
        type="text"
        placeholder="Last name"
        onChange={props.registerLastName}
      />
      <input type="text" placeholder="Class" onChange={props.selectClass} />
      <button type="button">Register</button>
    </div>
  );
};

export default addStudent;
