import React, { Component } from 'react';
import localStorage from 'localStorage'

class Main extends Component {

      signOut = event => {
        localStorage.clear()
        this.props.history.replace('/')
      }
    

  render() {
    return (
        <div style={{ width: '800px' }}>
        <h2 className="ui center aligned icon header">
          <i className="circular teal users icon" />
          Welcome again, {localStorage.getItem('username')}
        </h2>

        <button onClick={this.signOut} className="ui button">Sign out</button>
        </div>

    )
  }
}

export default Main;
