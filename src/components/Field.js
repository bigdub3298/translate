import React, { Component } from "react";

export class Field extends Component {
  render() {
    return (
      <div className="field eight column wide">
        <label> Name</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
