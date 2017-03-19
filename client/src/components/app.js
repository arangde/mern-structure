import React, { Component } from 'react';
import HeaderTemplate from './template/header';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderTemplate logo="My Dashboard" />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
