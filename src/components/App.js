import React, { Component } from "react";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:{" "}
          <i
            onClick={() => this.onLanguageChange("english")}
            className="flag us"
          ></i>
          <i
            onClick={() => this.onLanguageChange("dutch")}
            className="flag nl"
          ></i>
        </div>
      </div>
    );
  }
}

export default App;
