import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.css';

class Header extends PureComponent {
  state = {};

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    menu: PropTypes.bool.isRequired,
    home: PropTypes.func.isRequired
  };

  render() {
    const { menu, onClick, home } = this.props;
    return (
      <header className={styles.header}>
        <Link onClick={home} to="/">lilhlp</Link>
        {menu 
          ? <button id="x-mark" onClick={onClick}>&#x2715;</button>
          : <button id="hamburger" onClick={onClick}>&#9776;</button>
        }
      </header>
    );
  }
}
 
export default Header;