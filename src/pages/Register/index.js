import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Divider, Segment } from 'semantic-ui-react'
import register from './register.css'

class Register extends Component {
    render() {
        /*constructor() {
                            super();
                        this.state = {
                            firstName: '',
                        lastName: '',
                        username: '',
                        password: '',
                        email: '',
                        phone: ''
        
                    };
                    this.onTextChange = this.onTextChange.bind(this)
                    this.onSubmit = this.onSubmit.bind(this)
        
                }
        
                onTextChange(e) {
                    const name = e.target.name
                    const value = e.target.value
                    this.setState({[name]: value })
                    console.log(value);
                }
        
                onSubmit(e) {
                            singup(this.state.firstName, this.state.lastName, this.state.username, this.state.password, this.state.address, this.state.email, this.state.phone)
                                .then(data => {
                                    if (data.status === 200) {
                                        this.props.history.replace('/login')
                                    }
                                })
                        }*/

        return (
            //web
            <div>
                <h2 class="ui icon huge yellow center aligned header">
                    <i aria-hidden="true" class="users circular icon"></i>
                    <div class="content">REGISTER</div>
                </h2>

                <Form class="rg" >
                    <Form.Group style={{ marginLeft: '30%' }}>
                        <Form.Input label='First name' placeholder='First Name' width={5} onChange={this.onTextChange} />
                        <Form.Input label='Last name' placeholder='Last Name' width={5} onChange={this.onTextChange} />
                    </Form.Group>
                    <div style={{ marginLeft: '37%' }}>
                        <Form.Input label='Username' placeholder='Username' width={7} onChange={this.onTextChange} />
                        <Form.Input label='Password' placeholder='Password' width={7} onChange={this.onTextChange} />
                        <Form.Input label='Email' placeholder='joe@schmoe.com' width={7} onChange={this.onTextChange} />
                        <Form.Input label='Phone' placeholder='0912345678' width={7} onChange={this.onTextChange} />
                    </div>
                </Form>
                <Divider />
                <Segment inverted>
                    <Button className='ui white button' inverted color='brown' content='Back' href='/' />
                    <Button type='submit' className='ui white button' inverted color='brown' onClick={this.onSubmit}>
                        Submit
                  </Button>
                </Segment>

            </div>

        )
    }
}
export default Register;

