import React, { Component } from 'react';
import localStorage from 'localStorage'
import { Menu, Icon, input, Image, Divider, Segment, Advertisement, } from 'semantic-ui-react'
import bg from '../bg.css'

class Product extends Component {
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
        const src = 'https://i.imgur.com/3YITARc.jpg'
        const src1 = 'https://i.imgur.com/jR846DM.jpg'
        const src2 = 'https://i.imgur.com/CuKqpXr.jpg'
        const src3 = 'https://i.imgur.com/mnaTVcA.jpg'
        const src4 = 'https://i.imgur.com/fLdQOau.jpg'
        const src5 = 'https://i.imgur.com/1UuSepk.jpg'
        const src6 = 'https://i.imgur.com/MU5GD6t.jpg'
        const src7 = 'https://i.imgur.com/hjsdOZx.jpg'
        const src8 = 'https://i.imgur.com/boElTU3.jpg'
        const src9 = 'https://i.imgur.com/pNPCVET.jpg'
        const src10 = 'https://i.imgur.com/pjb35hq.jpg'
        const src11 = 'https://i.imgur.com/GUtjmQQ.jpg'

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
                <div>
                    <h1 class='ms'>
                        Product
          </h1><br /><br /><br />

                    <Image align='left' src={src} size='medium' verticalAlign='top' />
                    <Image src={src1} size='medium' verticalAlign='top' />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Image src={src2} size='medium' verticalAlign='top' />
                    <Image align='right' src={src3} size='medium' verticalAlign='top' />
                    <br /><br /><br /><br />
                    <Image align='left' src={src4} size='medium' verticalAlign='middle' />
                    <Image src={src5} size='medium' verticalAlign='middle' />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Image src={src6} size='medium' verticalAlign='middle' />
                    <Image align='right' src={src7} size='medium' verticalAlign='middle' />
                    <br /><br /><br /><br />
                    <Image align='left' src={src8} size='medium' verticalAlign='middle' />
                    <Image src={src9} size='medium' verticalAlign='middle' />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Image src={src10} size='medium' verticalAlign='middle' />
                    <Image align='right' src={src11} size='medium' verticalAlign='middle' />
                </div>
            </div >

        )
    }
}

export default Product;
