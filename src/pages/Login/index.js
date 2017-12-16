import React from 'react';
import { login } from '../../api'
import { Icon, Button, Grid, Divider, Segment } from 'semantic-ui-react'

import loginCss from './login.css'

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
        console.log(data.status + "sssss")
        if (data.status === 200) {
          localStorage.setItem('username', this.state.username)
          localStorage.setItem('status', this.state.username)
          this.props.history.replace('/')
        } else {
          alert('Username or Password is invalid');
        }
        // console.log('sssss')
      })
  }

  render() {

    return (
      <div
        className='ui middle aligned center aligned grid'
        style={{ padding: '50px 0 0 50px', width: '500px', margin: '5% 30%' }}>
        <div className='column'>
          <h2 className='ui yellow huge header'>Login</h2>
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
                    onChange={this.onTextChange} required />
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
                    onChange={this.onTextChange} required />
                </div>
              </div>
              <div className='field'>
                <div className='ui left icon input'>
                  <Segment padded>
                    <Button primary fluid type='submit' className='ui teal fluid button'>
                      Log in
                  </Button>
                    <Divider horizontal>Or</Divider>
                    <Button secondary fluid href="/register">
                      Register
                  </Button>
                  </Segment>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default Login;