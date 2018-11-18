import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Landing from '../landing/Landing';
import Menu from '../menu/Menu';
import Auth from '../auth/Auth';
import About from '../about/About';
import Drive from '../drive/Drive';
// import Drivers from '../drivers/Drivers';
import Ride from '../ride/Ride';
import DriverForm from '../forms/DriverForm';
import RiderForm from '../forms/RiderForm';
import styles from './App.css';

class App extends PureComponent {
  state = {
    menu: false,
    menuOptions: {},
    style: {}
  };

  toggleMenu = (event, menuOptions) => {
    if(this.state.menu && !menuOptions) {
      this.setState({ menu: false, style: {} });
      setTimeout(() => this.setState({ menuOptions: {} }), 200);
    }
    else { 
      this.setState({ 
        menu: true,
        menuOptions: menuOptions || { about: true }
      });
      setTimeout(() => this.setState({ style: { overflow: 'hidden' } }), 300);
    }
  };

  render() { 
    const { menu, menuOptions } = this.state;
    return (
      <Router>
        <div className={styles.app}>
          <Header
            onToggle={this.toggleMenu} 
            menu={menu}
            menuOptions={menuOptions}
          />
          <div className={menu ? 'menu-open' : 'menu-closed'}>
            <Menu 
              onToggle={this.toggleMenu}
              menuOptions={menuOptions}
            />
          </div>
          <main style={menu ? this.state.style : null}>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/login" component={Auth}/>
              <Route path="/about" component={About}/>
              {/* <Route exact path="/about/drivers" component={Drivers}/> */}
              <Route exact path="/drive" component={Drive}/>
              <Route exact path="/ride" component={Ride}/>
              <Route exact path="/driver/signup" component={DriverForm}/>
              <Route exact path="/rider/signup" component={RiderForm}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          <footer>LILHLP 2018</footer>
        </div>
      </Router>
    );
  }
}
 
export default App;