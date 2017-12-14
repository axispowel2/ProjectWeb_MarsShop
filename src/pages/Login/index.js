import React from 'react';

import { login, apigoogle } from '../../api'


class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  onTextChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    login(this.state.username, this.state.password)
      .then(data => {
        if (data.status === 200) {
          localStorage.setItem('username', this.state.username)
          this.props.history.replace('/')
        }
      })
  }

  render() {
    return (
      <div
        className='ui middle aligned center aligned grid'
        style={{ padding: '50px 0 0 50px', width: '500px' }}>
        <div className='column'>
          <h2 className='ui teal header'>Login</h2>
          <form className='ui large form' onSubmit={this.onSubmit}>
            <div className='ui stacked segment'>

              <div className='field'>
                <div className='ui left icon input'>
                  <i className='user icon' />
                  <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.onTextChange} />
                </div>
              </div>

              <div className='field'>
                <div className='ui left icon input'>
                  <i className='lock icon' />
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.onTextChange} />
                </div>
              </div>

              <div className='field'>
                <div className='ui left icon input'>
                  <button type='submit' className='ui teal fluid button'>
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </form>
          <a href="/oauth/google">Log in with Google</a> &nbsp;
          <a href="/oauth/facebook">Log in with facebok</a> &nbsp;
          <button onClick={this.ongoogle}>0000000</button>
          <a href="/oauth/twitter">Log in with twitter</a> &nbsp;
        </div>
      </div>

    );
  }
}

export default Login;