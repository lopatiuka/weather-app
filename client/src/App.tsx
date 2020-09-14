import React from 'react';
import './App.scss';
import { MainComponent } from './components/main.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router'
import { LoginComponent } from './components/authorization/login.component';
import { SignUpComponent } from './components/authorization/signUp.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' component = { MainComponent }/>
          <Route path = '/login' component = { LoginComponent }/>
          <Route path = '/signUp' component = { SignUpComponent }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
