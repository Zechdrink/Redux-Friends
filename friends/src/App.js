import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { fetchFriends } from './action/action.js';

import FriendsList from './components/FriendsList';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected'

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state ={

  //   };
  // }

  componentDidMount(){
    this.props.fetchFriends();
  }

  render() {
    return (
      <Router>
        <div className="App">

        <ul className = "NavBar">

          <li><Link to = "/api/friends"> Friends</Link></li>
          <li><Link to = "/api/login">Login</Link></li>

        </ul>

        <p> { this.props.friends } </p>
        

        <Route path = "/api/friends" component = {FriendsList} />
        <Route path = "/api/login" component = {LoginPage} />
        <PrivateRoute path = "/protected" component = {Protected} />
    


        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }

}

export default connect(mapStateToProps, { fetchFriends })(App);
