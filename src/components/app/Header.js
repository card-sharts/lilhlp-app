import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const active = { borderBottom: 'solid thin #08d9d6', color: '#08d9d6' };

class Header extends PureComponent {
  state = {};

  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    options: PropTypes.object,
    menu: PropTypes.bool.isRequired,
  };

  toggleFalse = () => {
    this.props.onToggle(false);
  };

  toggleTrue = () => {
    this.props.onToggle(true);
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

  render() {
    const { about, drive, ride, login } = this.props.options;
    const { menu } = this.props;
    return (
      <header className={styles.header}>
        <Link id="logo" onClick={this.toggleFalse} to="/">LILHLP</Link>
        <nav>
          <div className='desktop-nav'>
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
          </div>
          {menu 
            ? <button id="x-mark" onClick={this.toggleFalse}>&#x2715;</button>
            : <div>
              <Link
                to="/login" 
                id="mobile-view-login"
                style={login ? active : null }
              >
                LOG IN
              </Link>
              <button id="hamburger" onClick={this.toggleTrue}>&#9776;</button>
            </div>
          }
        </nav>
        <Link
          to="/login" 
          id="login"
          onClick={this.toggleFalse}
          style={login ? active : null }
        >
          LOG IN
        </Link>
      </header>
    );
  }
}
 
export default Header;