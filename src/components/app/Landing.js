import React, { PureComponent } from 'react';
import styles from './Landing.css';

class Landing extends PureComponent {
  state = {  };
  render() { 
    return (
      <div className={styles.landing}>
        <header>
          <h2>About</h2>
        </header>
        <main>
        </main>
      </div>
    );
  }
}
 
export default Landing;