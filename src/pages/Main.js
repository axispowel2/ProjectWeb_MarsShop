import React, { Component } from 'react';
import localStorage from 'localStorage'
import { Menu, Icon, input, Image, Divider, Segment, Advertisement } from 'semantic-ui-react'
import bg from './bg.css'

class Main extends Component {
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
    const src = 'https://i.imgur.com/3ks52zf.jpg'
    const src1 = 'https://i.imgur.com/EQHiI5G.jpg'
    const src2 = 'https://i.imgur.com/40oXMwg.jpg'
    const src3 = 'https://i.imgur.com/wnebnWZ.jpg'
    const src4 = 'https://i.imgur.com/dq4UwNI.jpg'

    return (
      <div>
        <Menu pointing inverted color='rgb(8, 0, 0)'>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          <Menu.Item name='Product' active={activeItem === 'Product'} onClick={this.handleItemClick} href='product' />
          <Menu.Item name='Contact Us' active={activeItem === 'Contact Us'} onClick={this.handleItemClick} href='contact' />
          <Menu.Item name='Management' active={activeItem === 'Management'} onClick={this.handleItemClick} href='management' />
          <Menu.Menu position='right'>
            <Menu.Item name='signOut'>
              <Icon name='user' />&nbsp;&nbsp;&nbsp;&nbsp;
              {localStorage.getItem('username')}&nbsp;

              <button onClick={this.signOut} className="ui button">Sign out</button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>


        <div class="top banner test ad test ad">
          <Image src={src4} verticalAlign='top' class="top banner test ad" />
        </div>
        <br /><br />
        <p class='adv'>MARS HERO ศูนย์รวมอุปกรณ์เครื่องมือช่างที่ทำจากวัสดุที่ดีและมีคุณภาพ</p>

        <Image align='left' src={src} size='medium' verticalAlign='top' circular />
        <Image src={src1} size='medium' verticalAlign='top' circular />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image src={src2} size='medium' verticalAlign='top' circular />
        <Image align='right' src={src3} size='medium' verticalAlign='top' circular />
      </div>


    )
  }
}



export default Main;
