import React from "react";


class Main extends React.Component {
  render() {
    const msg = "Main - Connent";
    return (
      <div>
        <h1>{msg}</h1>
        {this.props.children}
      </div>
    );
  }
};


export default Main;
