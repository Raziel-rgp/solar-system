import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';

const headlineText = 'Planetas';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline={ headlineText } />
        <div>
          {Planets.map((planeta) => (<PlanetCard
            key={ planeta.name }
            planetName={ planeta.name }
            planetImage={ planeta.image }
          />))}
        </div>
      </>
    );
  }
}
export default SolarSystem;
