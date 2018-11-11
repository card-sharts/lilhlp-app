import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import About from '../pages/About';
import Drive from '../pages/Drive';
import Ride from '../pages/Ride';
import styles from './Menu.css';

class Menu extends PureComponent {
  state = {
    about: true,
    drive: false,
    ride: false
  };

  static propTypes = {
    menu: PropTypes.bool.isRequired
  };

  componentDidUpdate(prevProps) {
    if(this.props.menu !== prevProps.menu) {
      setTimeout(() => {
        this.setState({
          about: true,
          drive: false,
          ride: false
        });
      }, 500);
    }
  }

  renderAbout = () => {
    this.setState({
      about: true,
      drive: false,
      ride: false
    });
  };

  renderDrive = () => {
    this.setState({
      about: false,
      drive: true,
      ride: false
    });
  };

  renderRide = () => {
    this.setState({
      about: false,
      drive: false,
      ride: true
    });
  };

  render() { 
    const { about, drive, ride } = this.state;
    return (
      <Router>
        <div className={styles.menu}>
          <div className={this.props.menu ? 'menu-open' : 'menu-closed' }>
            <nav>
              <a 
                onClick={this.renderAbout} 
                style={about ? { borderBottom: 'solid thin lightgreen' } : null }
              >
                ABOUT
              </a>
              <a 
                onClick={this.renderDrive} 
                style={drive ? { borderBottom: 'solid thin lightgreen' } : null }
              >
                DRIVE
              </a>
              <a 
                onClick={this.renderRide} 
                style={ride ? { borderBottom: 'solid thin lightgreen' } : null }
              >
                RIDE
              </a>
            </nav>
            {about &&
              <About/>
            }
            {drive &&
              <Drive/>
            }
            {ride &&
              <Ride/>
            }
          </div>
        </div>
      </Router> 
    );
  }
}
 
export default Menu;