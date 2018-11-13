import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import About from './About';
import Drive from './Drive';
import Ride from './Ride';
import Login from './Login';
import styles from './Menu.css';

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
            style={about ? { borderBottom: 'solid thin #08d9d6', color: '#08d9d6' } : null }
          >
            ABOUT
          </a>
          <a 
            onClick={() => onClick({ drive: true })} 
            style={drive ? { borderBottom: 'solid thin #08d9d6', color: '#08d9d6' } : null }
          >
            DRIVE
          </a>
          <a 
            onClick={() => onClick({ ride: true })} 
            style={ride ? { borderBottom: 'solid thin #08d9d6', color: '#08d9d6' } : null }
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