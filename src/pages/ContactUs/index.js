import React, { Component } from 'react';
import localStorage from 'localStorage'
import { Menu, Icon, input, Image, Divider, Segment, Advertisement, Header } from 'semantic-ui-react'
import bg from '../bg.css'

class ContactUs extends Component {
    signOut = event => {
        localStorage.clear()
        this.props.history.replace('/')
    }

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        var menuItem = {
            weight: '10%',
        }
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing inverted color='rgb(8, 0, 0)'>
                    <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} href='/' />
                    <Menu.Item name='Product' active={activeItem === 'Product'} onClick={this.handleItemClick} href='product' />
                    <Menu.Item name='Contact Us' active={activeItem === 'Contact Us'} onClick={this.handleItemClick} href='contact' />
                    <Menu.Menu position='right'>
                        <Menu.Item style={menuItem} name='signOut'>
                            {localStorage.getItem('username')}&nbsp;
                            <button onClick={this.signOut} className="ui button">Sign out</button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>



                <br /><br />
                <div>
                    <Header as='h2' icon textAlign='center' color='red'>
                        <Icon name='users' circular />
                        <Header.Content>
                            Contact Us
      </Header.Content>
                    </Header>
                    <Image centered size='large' src='/assets/images/wireframe/centered-paragraph.png' />
                </div>
            </div>

        )
    }
}

export default ContactUs;
