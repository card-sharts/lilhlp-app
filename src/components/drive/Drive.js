import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from '../about/About.css';

class Drive extends PureComponent {
  state = {  }
  render() { 
    return (
      <div className={styles.about}>
        <section>
          <h2>Drive With Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button>
            <Link to="/driver/signup">
              SIGN UP
            </Link>
          </button>
        </section>
      </div>
    );
  }
}
 
export default Drive;