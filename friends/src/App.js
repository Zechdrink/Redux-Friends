import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import LoginPage from './components/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

        <ul className = "NavBar">

          <li><Link to = "/api/friends"> Friends</Link></li>
          <li><Link to = "/api/login">Login</Link></li>

        </ul>


        <h1> Friends List</h1>
        <Route path = "/api/friends" component = {FriendsList} />
        <Route path = "/api/login" component = {LoginPage} />


        </div>
      </Router>
    );
  }
}

export default App;
