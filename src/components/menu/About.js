import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './About.css';

class About extends PureComponent {

  state = {};

  static propTypes = {
    onToggle: PropTypes.func.isRequired
  };

  toggleDropDown = option => {
    if(option === 'one') this.setState(({ dropDownOne }) => ({ dropDownOne: !dropDownOne }));
    else this.setState(({ dropDownTwo }) => ({ dropDownTwo: !dropDownTwo }));
  };

  render() { 
    const { onToggle } = this.props;

    return (
      <div className={styles.about}>
        <button id="x-mark" onClick={() => onToggle(false)}>&#x2715;</button>
        <h2>About Menu</h2>
      </div>
    );
  }
}
 
export default About;