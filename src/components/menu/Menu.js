import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import About from './About';
import Drive from './Drive';
import Ride from './Ride';
import Login from './Login';
import styles from './Menu.css';

const active = { borderBottom: 'solid thin #08d9d6', color: '#08d9d6' }

class Menu extends PureComponent {
  state = {};

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
          {about && <About onToggle={this.toggleFalse}/>}
          {drive && <Drive onToggle={this.toggleFalse}/>}
          {ride && <Ride onToggle={this.toggleFalse}/>}
        </section>
      </div> 
    );
  }
}
 
export default Menu;