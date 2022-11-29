import React from "react";
import * as Constants from "./constants.js";
import "./ArrayContainer.css";

const ArrayContainer = (props) => {
  return (
    <div className="array-container" data-testid="array-container-testid">
      {props.array.map((value, idx) => (
        <div
          className="array-bar"
          data-testid="array-bar-testid"
          key={idx}
          style={{
            backgroundColor: Constants.PRIMARY_COLOR,
            height: `${value}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ArrayContainer;
