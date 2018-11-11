import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Menu from './Menu';
import About from '../pages/About';
import Drive from '../pages/Drive';
import Ride from '../pages/Ride';
import styles from './App.css';

class App extends PureComponent {
  state = {
    menu: false
  };

  toggleMenu = () => {
    this.setState(({ menu }) => ({ menu: !menu }));
  };

  home = () => {
    this.setState({ menu: false });
  };

  render() { 
    const { menu } = this.state;
    return (
      <Router>
        <div className={styles.app}>
          <Header 
            onClick={this.toggleMenu} 
            home={this.home}
            menu={menu}
          />
          <div className={menu ? 'menu-open' : 'menu-closed'}>
            <Menu menu={menu}/>
          </div>
          <main>
            <Switch>
              <Route exact path="/" component={Landing}/>
              {/* <Route path="/about" component={About}/>
              <Route path="/drive" component={Drive}/>
              <Route path="/ride" component={Ride}/> */}
              <Redirect to="/"></Redirect>
            </Switch>
          </main>
          <footer></footer>
        </div>
      </Router>
    );
  }
}
 
export default App;