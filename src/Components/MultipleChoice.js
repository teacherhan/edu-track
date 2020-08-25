import React from "react";
const multipleChoice = () => {
  return (
    <div>
      <p>
        <label>Multiple Choice</label>
      </p>
      <hr />
      <input type="text" placeholder="Enter question" />
      <input type="text" placeholder="Enter option" />
      <button type="button" placeholder="Class">
        Add
      </button>
      <button type="submit">Submit</button>
    </div>
  );
};
export default multipleChoice;
