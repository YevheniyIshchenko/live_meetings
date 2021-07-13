/* eslint-disable */
import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// algo
// 1. show login by default
// 2. show spinner for 2 sec after login click
// 3. show logout
// 4. show login after logout click

class Auth extends React.Component {
  state = {
    isLoggedIn: true,
    isLogging: false,
  };

  onLogin = () => {
    this.setState({
      isLogging: true,
    });

    setTimeout(() => {
      this.setState({
        isLoggedIn: false,
        isLogging: false,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  // available = () => {

  // }

  render() {
    // if (this.state.isLogging) {
    //   return <Spinner size={20} />;
    // }
    return this.state.isLoggedIn ? (
      this.state.isLogging ? (
        <Spinner size={20} />
      ) : (
        <Login onLogin={this.onLogin} />
      )
    ) : (
      <Logout onLogout={this.onLogout} />
    );
  }
}

export default Auth;
