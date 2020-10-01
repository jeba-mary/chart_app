import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import history from '../history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
