import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import About from '../pages/About';
import Drive from '../pages/Drive';
import Ride from '../pages/Ride';
import styles from './Menu.css';

class Menu extends PureComponent {
  state = {};

  static propTypes = {
    menu: PropTypes.bool.isRequired,
    options: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {  
    const { about, drive, ride } = this.props.options;
    const { onClick } = this.props;

    return (
      <div className={styles.menu}>
        <nav>
          <a 
            onClick={() => onClick({
              about: true,
              drive: false,
              ride: false
            })} 
            style={about ? { borderBottom: 'solid thin lightgreen' } : null }
          >
            ABOUT
          </a>
          <a 
            onClick={() => onClick({
              about: false,
              drive: true,
              ride: false
            })} 
            style={drive ? { borderBottom: 'solid thin lightgreen' } : null }
          >
            DRIVE
          </a>
          <a 
            onClick={() => onClick({
              about: false,
              drive: false,
              ride: true
            })} 
            style={ride ? { borderBottom: 'solid thin lightgreen' } : null }
          >
            RIDE
          </a>
        </nav>
        <section>
          {about && <About/>}
          {drive && <Drive/>}
          {ride && <Ride/>}
        </section>
      </div> 
    );
  }
}
 
export default Menu;