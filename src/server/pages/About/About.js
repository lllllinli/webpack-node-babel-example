import React from "react";
import fetch from "node-fetch"

/**
* use node fetch
**/
// fetch('https://github.com/')
//     .then(function(res) {
//         return res.text();
//     }).then(function(body) {
//         console.log(body);
//     });


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    ::this._handler;
  }
  componentWillMount(){
    //todo fetch
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
