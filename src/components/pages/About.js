import React, { PureComponent } from 'react';
import styles from './About.css';

class About extends PureComponent {
  state = {  };
  render() { 
    return (
      <div className={styles.about}>
        <h2>About Menu</h2>
      </div>
    );
  }
}
 
export default About;