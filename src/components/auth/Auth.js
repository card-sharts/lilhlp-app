import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Auth.css';

class Auth extends PureComponent {
  state = {
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { email, password } = this.state;

    return (
      <div className={styles.auth}>
        <form>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
            required
          />
          <button>Log in</button>
        </form>
        <div className="signup-links">
          <h3>Don&apos;t have an account?</h3>
          <Link to="/driver/signup">Sign up to drive</Link>
          <Link to="/rider/signup">Sign up to ride</Link>
        </div>
      </div>
    );
  }
}
 
export default Auth;