import React from "react";
import './css/filterBTN.css';

const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={() => {
            task(input);
            updatePageNumber(1);
          }}
          className="btn btn-outline align-items-center"
          for={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
