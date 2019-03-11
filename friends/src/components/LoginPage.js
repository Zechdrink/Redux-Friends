import React from 'react';
import { connect } from 'react-redux';
import { login } from '../action/action';

class LoginPage extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    }
  
    login = e => {
      e.preventDefault();
      this.props.login(this.state.credentials)
        .then(() => {
          this.props.history.push('/protected');
        })
    }
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value,
        }
      });
    }
  
    render() {
      return (
        <div>
            <h1> LOGIN PAGE </h1>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder = 'username...'
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              placeholder = 'password...'
            />
            <button>Log in</button>
          </form>
        </div>
      )
    }
  }
  
  export default connect(null, { login })(LoginPage);