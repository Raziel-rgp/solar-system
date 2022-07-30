import React, { Component } from 'react';
import Title from './Title';
import Missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends Component {
  render() {
    const headlineText = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ headlineText } />
        {Missions.map((mission) => (<MissionCard
          key={ mission.name }
          missionName={ mission.name }
          missionYear={ mission.year }
          missionCountry={ mission.country }
          missionDestination={ mission.destination }
        />))}
      </div>
    );
  }
}

export default Mission;
