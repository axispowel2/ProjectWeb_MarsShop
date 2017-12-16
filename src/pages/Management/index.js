import React, { Component } from 'react';
import localStorage from 'localStorage'
import { Menu, Icon, input, Image, Divider, Segment, Button, Header, Table, Rating } from 'semantic-ui-react'
import Login from './../Login'
import { getAUser, deleteUser } from '../../api'


class Management extends Component {

    constructor() {
        super();
        this.state = {
            allUsers: []
        }
        this.getUsers = this.getUsers.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        deleteUser(e.target.name)
            .then(this.getUsers())
            .then(window.location.reload())
    }

    getUsers = () => {
        getAUser()
            .then(data => this.setState({ allUsers: data }))
            .catch(err => console.error('Something went wrong.'))
    }

    componentWillMount() { // when render finish call is func
        this.getUsers()
    }

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
        const users = this.state.allUsers
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

                <Table celled >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine >Username</Table.HeaderCell>
                            <Table.HeaderCell>FirstName</Table.HeaderCell>
                            <Table.HeaderCell >LastName</Table.HeaderCell>
                            <Table.HeaderCell >Delete User</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {users.length >= 0 ?
                            users.map(user =>

                                <Table.Row>
                                    <Table.Cell width='4' singleLine>{user.username}</Table.Cell>
                                    <Table.Cell width='4' singleLine>{user.firstName}</Table.Cell>
                                    <Table.Cell width='4' singleLine>{user.lastName}</Table.Cell>
                                    <Table.Cell width='4'>
                                        <Button name={user.username} onClick={this.onSubmit} ><Icon name='user' /> Delete User</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                            : null
                        }
                    </Table.Body>
                </Table >
            </div>
        )
    }
}

export default Management;
