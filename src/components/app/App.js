import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Menu from './Menu';
import styles from './App.css';

class App extends PureComponent {
  state = {
    menu: false,
    options: {
      about: null,
      drive: null,
      ride: null
    } 
  };

  toggleMenu = menu => {
    if(!menu) {
      this.setState({ menu: false });
      setTimeout(() => this.setState({
        options: {
          about: null,
          drive: null,
          ride: null
        }
      }), 500);
    }
    else { 
      this.setState({ 
        menu: true,
        options: {
          about: true,
          drive: false,
          ride: false
        }
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
              menu={menu}
              options={options}
            />
          </div>
          <main>
            <Switch>
              <Route exact path="/" component={Landing}/>
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