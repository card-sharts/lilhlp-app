import React, { PureComponent } from 'react';

class DriverForm extends PureComponent {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    city: ''
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const {
      email,
      firstName,
      lastName,
      phoneNumber,
      password,
      city
    } = this.state;

    return (
      <div>
        <form>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="email"
            required
          />
          <input
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            placeholder="first name"
            required
          />
          <input
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            placeholder="last name"
            required
          />
          <input
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
            placeholder="phone number"
            required
          />
          <input
            type="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
            required
          />
          <input
            name="city"
            value={city}
            onChange={this.handleChange}
            placeholder="city"
            required
          />
        </form>
      </div>
    );
  }
}
 
export default DriverForm;
