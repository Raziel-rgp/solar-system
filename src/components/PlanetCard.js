import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-card">
          {planetName}
          {planetImage}
        </p>
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
