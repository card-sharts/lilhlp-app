import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './option.css';

class Options extends PureComponent {

  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired
  };

  render() { 
    const { onToggle, links } = this.props;

    return (
      <div className={styles.option}>
        <button id="x-mark" onClick={onToggle}>&#x2715;</button>
        <ul>
          {
            links.map(({ name, link }, i) => (
              <li key={i}>
                <Link to={link} onClick={onToggle}>
                  {name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
 
export default Options;