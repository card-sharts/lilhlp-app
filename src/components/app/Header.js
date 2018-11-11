import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.css';

class Header extends PureComponent {
  state = {};

  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    options: PropTypes.object,
    menu: PropTypes.bool.isRequired,
  };

  render() {
    const { about, drive, ride } = this.props.options;
    const { menu, onToggle, onClick } = this.props;
    return (
      <header className={styles.header}>
        <Link onClick={() => onToggle(false)} to="/">LILHLP</Link>
        <nav>
          <div className='desktop-nav'>
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
          </div>
          {menu 
            ? <button id="x-mark" onClick={() => onToggle(false)}>&#x2715;</button>
            : <button id="hamburger" onClick={() => onToggle(true)}>&#9776;</button>
          }
        </nav>
        <Link id="login" to="login">LOG IN</Link>
      </header>
    );
  }
}
 
export default Header;