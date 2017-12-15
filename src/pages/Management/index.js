import React, { Component } from 'react';
import localStorage from 'localStorage'
import { Menu, Icon, input, Image, Divider, Segment, Advertisement, Header } from 'semantic-ui-react'
import Login from './../Login'
//import { getUser,deleteuser } from '../../api'


class Management extends Component {
    constructor() {
        super();
        this.state = {
            i: 1,
            user: []
        };
        //this.onSubmit = this.onSubmit.bind(this)
    }

    /*onSubmit(e) {

        deleteuser(e.target.value)
            .then(data => {
                if (data.status === 200) {
                    this.componentDidMount()
                }
            })
    }*/


    signOut = event => {
        localStorage.clear()
        this.props.history.replace('/')
    }

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    /* componentDidMount() {
         getUser().then((data) => this.setState({ user: data }))
     }*/

    render() {
        var menuItem = {
            weight: '10%',
        }
        const userF = this.state.firstname
        const user = this.state.username

        const { activeItem } = this.state
        return (
            <div>
                <Menu pointing inverted color='rgb(8, 0, 0)'>
                    <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} href='/' />
                    <Menu.Item name='Product' active={activeItem === 'Product'} onClick={this.handleItemClick} href='product' />
                    <Menu.Item name='Contact Us' active={activeItem === 'Contact Us'} onClick={this.handleItemClick} href='contact' />
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
                {this.state.user.length >= 0 ?
                    this.state.user.map(list => { list.firstName }
                    ) : null
                }

            </div>
        )
    }
}

export default Management;
