import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
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
        link: '/about'
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
    menu: PropTypes.bool.isRequired,
    options: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
  };

  openAboutMenu = () => {
    this.props.onClick({ about: true });
  };
  openDriveMenu = () => {
    this.props.onClick({ drive: true });
  };
  openRideMenu = () => {
    this.props.onClick({ ride: true });
  };

  toggleFalse = () => {
    this.props.onToggle(false);
  };

  render() {  
    const { about, drive, ride } = this.props.options;
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
          {about && <Option links={aboutMenu} onToggle={this.toggleFalse}/>}
          {drive && <Option links={driveMenu} onToggle={this.toggleFalse}/>}
          {ride && <Option links={rideMenu} onToggle={this.toggleFalse}/>}
        </section>
      </div> 
    );
  }
}
 
export default Menu;