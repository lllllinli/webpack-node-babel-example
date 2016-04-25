import React from "react";



class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    ::this._handler;
  }
  componentWillMount(){
    this._handler();
  }
  _handler() {
    console.log("on handler");
  }
  render() {
    const msg = "Abbot Page";
    return (
      <div>
        <h2 className="title">{msg}</h2>
        <div>
          counts: {this.state.count}
        </div>
      </div>
    );
  }
};

About.propTypes = { initialCount: React.PropTypes.number };
About.defaultProps = { initialCount: 10 };

export default About;
