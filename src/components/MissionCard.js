import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { missionName } = this.props;
    const { missionYear } = this.props;
    const { missionCountry } = this.props;
    const { missionDestination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{ missionName }</p>
        <p data-testid="mission-year">{ missionYear }</p>
        <p data-testid="mission-country">{ missionCountry }</p>
        <p data-testid="mission-destination">{ missionDestination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionYear: PropTypes.string.isRequired,
  missionCountry: PropTypes.string.isRequired,
  missionDestination: PropTypes.string.isRequired,
};
export default MissionCard;
