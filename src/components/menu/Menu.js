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

  render() {  
    const { about, drive, ride } = this.props.options;
    const { onClick, onToggle } = this.props;

    return (
      <div className={styles.menu}>
        <nav>
          <a 
            onClick={() => onClick({ about: true })} 
            style={about ? active : null }
          >
            ABOUT
          </a>
          <a 
            onClick={() => onClick({ drive: true })} 
            style={drive ? active : null }
          >
            DRIVE
          </a>
          <a 
            onClick={() => onClick({ ride: true })} 
            style={ride ? active : null }
          >
            RIDE
          </a>
        </nav>
        <section>
          {about && <About onToggle={onToggle}/>}
          {drive && <Drive onToggle={onToggle}/>}
          {ride && <Ride onToggle={onToggle}/>}
        </section>
      </div> 
    );
  }
}
 
export default Menu;