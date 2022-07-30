import React, { Component } from 'react';

import Header from './components/header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

const headlineText = 'planet';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Title headline={ headlineText } />
      </>
    );
  }
}

export default App;
