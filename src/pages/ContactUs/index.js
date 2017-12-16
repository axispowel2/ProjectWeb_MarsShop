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
                    <Menu.Item name='Board' active={activeItem === 'Board'} onClick={this.handleItemClick} href='Board' />
                    <Menu.Item name='Management' active={activeItem === 'Management'} onClick={this.handleItemClick} href='management' />
                    <Menu.Menu position='right'>
                        <Menu.Item style={menuItem} name='signOut'>
                            <Icon name='user' />&nbsp;&nbsp;&nbsp;&nbsp;
                            {localStorage.getItem('username')}&nbsp;
                            <button onClick={this.signOut} className="ui button">Sign out</button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>



                <br /><br />
                <div>
                    <Header as='h1' color='teal' text-align='center'>
                        <Header.Content>
                            Contact Us
                    </Header.Content>
                        <br /><br />

                    </Header>
                    <Image src='https://i.imgur.com/H5rvT7D.png' size='medium' circular centered />
                    <br />

                    <p><Icon fitted name='phone' /> : 081 113 4838</p>
                    <p><Icon fitted name='facebook' /> : marsherotools</p>
                    <p><Icon fitted name='mail' /> : marshero24@gmail.com</p>
                </div>
            </div>

        )
    }
}

export default ContactUs;
