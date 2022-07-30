import React from 'react';
import Title from './Title';

const headlineText = 'Planetas';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline={ headlineText } />
      </>
    );
  }
}
export default SolarSystem;
