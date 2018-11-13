import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Menu from '../menu/Menu';
import Auth from '../auth/Auth';
import About from '../about/About';
import Drive from '../drive/Drive';
import Ride from '../ride/Ride';
import DriverForm from '../auth/DriverForm';
import styles from './App.css';

class App extends PureComponent {
  state = {
    menu: false,
    options: {} 
  };

  toggleMenu = menu => {
    if(!menu) {
      this.setState({ menu: false });
      setTimeout(() => this.setState({ options: {} }), 500);
    }
    else { 
      this.setState({ 
        menu: true,
        options: { about: true }
      });
    }
  };

  updateMenuOptions = options => {
    this.setState({
      menu: true, 
      options 
    });
  };

  render() { 
    const { menu, options } = this.state;
    return (
      <Router>
        <div className={styles.app}>
          <Header 
            onToggle={this.toggleMenu} 
            onClick={this.updateMenuOptions}
            menu={menu}
            options={options}
          />
          <div className={menu ? 'menu-open' : 'menu-closed'}>
            <Menu 
              onClick={this.updateMenuOptions}
              onToggle={this.toggleMenu}
              menu={menu}
              options={options}
            />
          </div>
          <main>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/login" component={Auth}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/drive" component={Drive}/>
              <Route exact path="/ride" component={Ride}/>
              <Route exact path="/driver/signup" component={DriverForm}/>
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