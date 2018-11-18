import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Options from './Option';
import MenuLinks from './MenuLinks';
import styles from './Menu.css';

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
    const { menuOptions, onToggle } = this.props;  
    const { about, drive, ride } = menuOptions;
    const { aboutMenu, driveMenu, rideMenu } = this.state;

    return (
      <div className={styles.menu}>
        <nav>
          <MenuLinks
            menuOptions={menuOptions}
            onToggle={onToggle}
          />
        </nav>
        <section>
          {about && <Options links={aboutMenu} onToggle={onToggle}/>}
          {drive && <Options links={driveMenu} onToggle={onToggle}/>}
          {ride && <Options links={rideMenu} onToggle={onToggle}/>}
        </section>
      </div> 
    );
  }
}
 
export default Menu;