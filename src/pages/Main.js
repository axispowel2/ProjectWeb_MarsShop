import React, { Component } from 'react';
import localStorage from 'localStorage'
import Header from './Header'
import Footer from './Footer'

class Main extends Component {
  signOut = event => {
    localStorage.clear()
    this.props.history.replace('/')
  }
  render() {
    return (
      <div>
        <Header />
        <h2 className="ui center aligned icon header">
          <i className="circular teal users icon" />
          Welcome , {localStorage.getItem('username')}
        </h2>
        <Footer />
      </div>
    )
  }
}



export default Main;
