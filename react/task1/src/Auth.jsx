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
    isLoggedIn: false,
    isLogging: false,
  };

  onLogin = () => {
    console.log('Step #1');

    this.setState({
      isLogging: true,
    });

    console.log('set state called!!');

    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLogging: false,
      });
    }, 2000);
    console.log('Last Step');
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  // render() {
  //   let button;
  //   if (this.state.isLoggedIn) {
  //     button = <Login onLogin={this.handleLogin} />;
  //   } else {
  //     button = <Logout onLogout={this.handleLogout} />;
  //   }
  //   return <div>{this.state.isSpinner ? <Spinner size={40} /> : button}</div>;
  // }

  // render() {
  //   // if (this.state.isLogging) {
  //   //   return <Spinner size={20} />;
  //   // }
  //   return this.state.isLoggedIn ? (
  //     this.state.isLogging ? (
  //       <Spinner size={20} />
  //     ) : (
  //       <Login onLogin={this.onLogin} />
  //     )
  //   ) : (
  //     <Logout onLogout={this.onLogout} />
  //   );
  // }

  // render() {
  //   if (!this.state.isLoggedIn) return <Login onLogin={this.onLogin} />;

  //   if (this.state.isLogging) return <Logout onLogout={this.onLogout} />;

  //   return <Spinner size={20} />;
  // }

  // render() {
  //   if (!this.state.isLogging && !this.state.isLoggedIn) {
  //     return <Login onLogin={this.onLogin} />;
  //   }
  //   if (this.state.isLogging) {
  //     return <Spinner size={32} />;
  //   }
  //   if (this.state.isLoggedIn && !this.state.isLogging) {
  //     return <Logout onLogout={this.onLogout} />;
  //   }
  //   return null;
  // }
  render() {
    debugger;
    const { isLogging, isLoggedIn } = this.state;

    if (isLogging) {
      return <Spinner size={50} />;
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.onLogout} />;
    }
    return <Login onLogin={this.onLogin} />;
  }
}

export default Auth;
