import React from 'react';
import Header from './widgets/Header/Header';


class Main extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
};


export default Main;
