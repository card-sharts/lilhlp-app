import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Options from './Option';
import Login from './Login';
import styles from './Menu.css';

const active = { borderBottom: 'solid thin #08d9d6', color: '#08d9d6' }

class Menu extends PureComponent {
  state = {
    aboutMenu: [
      {
        name: 'Overview',
        link: '/about'
      },
      {
        name: 'Safety First',
        link: '/about#vehicle'
      },
      {
        name: 'Meet our drivers',
        link: '/about/drivers'
      },
    ],
    driveMenu: [
      {
        name: 'Overview',
        link: '/drive'
      },
      {
        name: 'How it works',
        link: '/drive'
      },
      {
        name: 'Sign up to drive',
        link: '/driver/signup'
      }
    ],
    rideMenu: [
      {
        name: 'Overview',
        link: '/ride'
      },
      {
        name: 'How it works',
        link: '/ride'
      },
      {
        name: 'Price estimator',
        link: '/ride'
      },
      {
        name: 'Sign up for rides',
        link: '/ride'
      }
    ]
  };

  static propTypes = {
    menuOptions: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired
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
    const { aboutMenu, driveMenu, rideMenu } = this.state;

    return (
      <div className={styles.menu}>
        <nav>
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
        </nav>
        <section>
          {about && <Options links={aboutMenu} onToggle={this.props.onToggle}/>}
          {drive && <Options links={driveMenu} onToggle={this.props.onToggle}/>}
          {ride && <Options links={rideMenu} onToggle={this.props.onToggle}/>}
        </section>
      </div> 
    );
  }
}
 
export default Menu;