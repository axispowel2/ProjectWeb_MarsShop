import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

class Header extends React.Component {
    render() {
        var menuItem = {
            weight: '10%',
            a: 'red'
        }
        return (
            <div>
                <Menu >
                    <Menu.Item style={menuItem} name='test'>
                        <a href='test'>test</a>
                    </Menu.Item>
                    <Menu.Item style={menuItem} name='signOut'>
                        {localStorage.getItem('username')}
                        <button onClick={this.signOut} className="ui button">Sign out</button>
                    </Menu.Item>
                </Menu>
                This is Header
            </div>
        )
    }
}

export default Header;