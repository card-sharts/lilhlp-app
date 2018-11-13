import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Login.css';

class Login extends PureComponent {

  state = {};

  static propTypes = {
    onToggle: PropTypes.func.isRequired
  };


  render() { 
    const { onToggle } = this.props;

    return (
      <div className={styles.login}>
        <button id="x-mark" onClick={() => onToggle(false)}>&#x2715;</button>
        <section>
          <Link to="/driver/login"><h2>Driver login</h2></Link>
        </section>
        <section>
          <Link to="/rider/login"><h2>Rider login</h2></Link>
        </section>
      </div>
    );
  }
}
 
export default Login;