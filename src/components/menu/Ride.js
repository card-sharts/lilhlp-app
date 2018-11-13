import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Ride.css';

class Ride extends PureComponent {

  state = {  };

  static propTypes = {
    onToggle: PropTypes.func.isRequired
  };

  render() { 
    const { onToggle } = this.props;
    return (
      <div className={styles.ride}>
        <button id="x-mark" onClick={onToggle}>&#x2715;</button>
        <h2>Ride Menu</h2>
      </div>
    );
  }
}
 
export default Ride;