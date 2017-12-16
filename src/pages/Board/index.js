import React, { Component } from 'react';
import localStorage from 'localStorage'
import { Menu, Icon, input, Image, Divider, Segment, Comment, Grid, Form, TextArea, Button } from 'semantic-ui-react'
import Login from './../Login'
import { publishPost, getAllPosts } from '../../api'


class Board extends Component {


    signOut = event => {
        localStorage.clear()
        this.props.history.replace('/')
    }

    state = { activeItem: 'home', data: [] }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleTextArea = (e, { name, value }) => this.setState({ [name]: value })

    submitPost = () => {
        const data = {
            content: this.state.content,
            author: localStorage.getItem('username')
        }
        publishPost(data)
            //.then(window.location.href = window.location.href)
            .then(this.getAllPosts())

    }

    getAllPosts = () => {
        getAllPosts()
            .then(data => this.setState({ data: data }))
            .catch(err => console.error('Something went wrong.'))
    }

    componentWillMount() {
        this.getAllPosts()
    }

    render() {
        var menuItem = {
            weight: '10%',
        }
        //const posts = this.state.allPosts

        const { activeItem } = this.state
        const posts = this.state.data

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





                <h1 class='ms'>
                    Board
          </h1>
                <br /><br />
                <div>
                    <Grid columns='equal'>
                        <Grid.Column width={3}>

                        </Grid.Column>
                        <Grid.Column width={10}>
                            <div>
                                <Form>
                                    <TextArea name='content' placeholder='Tell us more' value={this.state.content} onChange={this.handleTextArea} />
                                    <Button className='ui primary button' style={{ margin: '16px 0' }} onClick={this.submitPost}>Send</Button>
                                </Form>
                                <br />

                            </div>
                        </Grid.Column>
                        <Grid.Column width={3}>

                        </Grid.Column>



                    </Grid>
                    <br /><br />
                    <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column width={3}>

                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Segment.Group >
                                    <Segment textAlign='left'>
                                        <Comment.Group >
                                            <Comment >
                                                <Comment.Content>
                                                    {posts.length >= 0 ?
                                                        posts.map(post =>
                                                            <div className='ui segment'>
                                                                <Comment.Author>Published by: {post.author}</Comment.Author>
                                                                <Comment.Metadata>
                                                                    <div >{post.time}</div>
                                                                </Comment.Metadata>
                                                                <Comment.Text>
                                                                    {post.content}
                                                                </Comment.Text>
                                                            </div>
                                                        )
                                                        : null
                                                    }
                                                </Comment.Content>
                                            </Comment>
                                        </Comment.Group>
                                    </Segment>
                                    <Segment>


                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                            <Grid.Column width={3}>

                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                </div>
            </div >

        )
    }
}

export default Board;
