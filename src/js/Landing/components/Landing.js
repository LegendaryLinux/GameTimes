import React, { Component } from 'react';
import '../../../styles/Landing/components/Landing.scss';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.timestamp = parseInt(new URLSearchParams(window.location.search).get('timestamp'), 10);
    this.state = {
      // Stuff
    };
  }

  render() {
    return (
      <div id="landing">
        <div>In your timezone, the game should start at:</div>
        <div id="landing-game-time">
          {(new Date(this.timestamp)).toString()}
        </div>
      </div>
    );
  }
}

export default Landing;
