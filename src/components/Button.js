import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export class Button extends Component {
  // connects context to component
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <button className="ui button primary" type="submit">
        Submit
      </button>
    );
  }
}

// another way to connect context
// Button.contextType = LanguageContext;

export default Button;
