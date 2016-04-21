import React from "react";

class Main extends React.Component {
  render() {
    const msg = "Main -co";
    return (
      <div>
        {msg}
        {this.props.children}
      </div>
    );
  }
};


export default Main;
