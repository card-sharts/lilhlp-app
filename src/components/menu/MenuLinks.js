import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

const active = { borderBottom: 'solid thin #08d9d6', color: '#08d9d6' };

class MenuLinks extends PureComponent {
  state = {  };

  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    menuOptions: PropTypes.object.isRequired
  };

  openAboutMenu = () => {
    this.props.onToggle(event, { about: true });
  };
  openDriveMenu = () => {
    this.props.onToggle(event, { drive: true });
  };
  openRideMenu = () => {
    this.props.onToggle(event, { ride: true });
  };

  render() { 
    const { about, drive, ride } = this.props.menuOptions;

    return (
      <Fragment>
        <a 
          onClick={this.openAboutMenu}
          style={about ? active : null }
        >
          ABOUT
        </a>
        <a
          onClick={this.openDriveMenu} 
          style={drive ? active : null }
        >
          DRIVE
        </a>
        <a 
          onClick={this.openRideMenu}
          style={ride ? active : null }
        >
          RIDE
        </a>
      </Fragment>
    );
  }
}
 
export default MenuLinks;