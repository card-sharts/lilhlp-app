import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Drive.css';

class Drive extends PureComponent {

  state = {  }

  static propTypes = {
    onToggle: PropTypes.func.isRequired
  };

  render() { 
    const { onToggle } = this.props;
    return (
      <div className={styles.drive}>
        <button id="x-mark" onClick={onToggle}>&#x2715;</button>
        <h2>Drive Menu</h2>
      </div>
    );
  }
}
 
export default Drive;