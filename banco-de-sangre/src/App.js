import React from 'react';
import './App.css';
import Login from './Components/Login';
import Menu from './Components/Menu';
import Donor from './Components/Donor';
import Stock from './Components/Stock';
import Transfers from './Components/Transfers';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App container-flex">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/menu" component={Menu} />
            <Route path="/donor" component={Donor} />
            <Route path="/stock" component={Stock} />
            <Route path="/transfers" component={Transfers} />
          </Switch>


        </div>
      </Router>
    );
  }
}

export default App;
