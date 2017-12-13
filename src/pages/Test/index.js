import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

class Test extends React.Component {

    signOut = event => {
        localStorage.clear()
        this.props.history.replace('/')
    }

    render() {
        var btnSignOut = {
            color: 'red',
            float: 'right'
        }
        return (
            <div>
                <Menu>
                    <Menu.Item
                        name='Signout'
                        onClick={this.handleItemClick}
                    >
                        {localStorage.getItem('username')}
                        <button onClick={this.signOut} className="ui button">Sign out</button>
                    </Menu.Item>
                </Menu>
                TestTestTestTestTestTestv
                </div>
        )
    }
}

export default Test;