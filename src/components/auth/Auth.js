import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Auth extends PureComponent {
  state = {
    email: '',
    password: ''
  };

  render() {
    const { email, password } = this.state; 
    return (
      <section>
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
          <button>Sign In</button>
        </form>
      </section>
    );
  }
}
 
export default Auth;
