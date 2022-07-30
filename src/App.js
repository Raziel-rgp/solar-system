import React, { Component } from 'react';

import Header from './components/header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
      </>
    );
  }
}

export default App;
