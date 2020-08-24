import React from "react";
const trueFalse = () => {
  return (
    <div>
      <p>
        <label>True/False Questions</label>
      </p>
      <input type="text" placeholder="Enter question" />
      <p>
        <input type="radio" />
        <label>True</label>
      </p>
      <p>
        <input type="radio" />
        <label>False</label>
      </p>

      <button type="submit">Submit</button>
    </div>
  );
};
export default trueFalse;
