import React, { PropTypes } from "react";
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
//


// function getVideoInfo(callback) {
//   fetch('http://test-eye-of-sauron.azurewebsites.net/').then(function(res) {
//       return res.json();
//   }).then(function(json) {
//       console.log(`JAVA json:${json._links.videos.href}`);
//       callback(json);
//   });
// }

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
      videos: props.videos
    };
    // ::this._handler;
    // ::this._renderVedioInfo;
  }
  componentWillMount(){
    //todo fetch
    // this._handler();
  }
  // _handler() {
  //   getVideoInfo((json) => {
  //
  //   });
  // }
  // _renderVedioInfo() {
  //   let vedioInfo = (<div></div>);
  //   if (!this.state.videos._links) {
  //     vedioInfo = (
  //       <table>
  //         <tr>
  //           <td>videos link:</td>
  //           <td></td>
  //         </tr>
  //       </table>
  //     );
  //   }
  //   return vedioInfo;
  // }
  render() {
    const msg = "Abbot Page";
    // const vedioInfo = this._renderVedioInfo();
    return (
      <div>
        <h2>{msg}</h2>
        <div>
          counts: {this.state.count}
        </div>
      </div>
    );
  }
};

About.propTypes = {
  initialCount: React.PropTypes.number,
  videos      : React.PropTypes.object
};
About.defaultProps = {
  initialCount: 10,
  videos      : null
};

export default About;
