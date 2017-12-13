import React, { Component } from 'react';
import localStorage from 'localStorage'
import Header from './Header'
import Footer from './Footer'
import { Menu } from 'semantic-ui-react'

class Main extends Component {
  signOut = event => {
    localStorage.clear()
    this.props.history.replace('/')
  }
  render() {
    return (
      <div>
        <Menu >
          <Menu.Item name='test'>
            <a href='test'>test</a>
          </Menu.Item>
          <Menu.Item name='signOut'>
            {localStorage.getItem('username')}
            <button onClick={this.signOut} className="ui button">Sign out</button>
          </Menu.Item>
        </Menu>
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
