import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export class Button extends Component {
  // connects context to component
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <button className="ui button primary" type="submit">
        {text}
      </button>
    );
  }
}

// another way to connect context
// Button.contextType = LanguageContext;

export default Button;
