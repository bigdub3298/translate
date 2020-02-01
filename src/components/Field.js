import React, { Component } from "react";

export class Field extends Component {
  render() {
    return (
      <div>
        <div className="ui field">
          <label> Name</label>
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default Field;
