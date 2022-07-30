import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
// import planets from '../data/planets';

const headlineText = 'Planetas';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline={ headlineText } />
        <PlanetCard />
      </>
    );
  }
}
export default SolarSystem;
