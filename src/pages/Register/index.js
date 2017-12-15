import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Divider, Segment } from 'semantic-ui-react'
import regisCss from './register.css'
import { register } from '../../api'

class Register extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: '',
            phone: '',
            status: 'user'
        };
        this.onTextChange = this.onTextChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onTextChange(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
        console.log(value);
    }

    onSubmit(e) {
        register(this.state.firstName, this.state.lastName, this.state.username, this.state.password, this.state.email, this.state.phone)
            .then(data => {
                if (data.status === 200) {
                    this.props.history.replace('/')
                }
                // else{

                // }
            })

    }

    render() {
        return (
            //web
            <div className="register">
                <h2 class="ui icon huge yellow center aligned header">
                    <i aria-hidden="true" class="users circular icon"></i>
                    <div class="content">REGISTER</div>
                </h2>

                <Form class="rg"  >
                    <div class="field" style={{ marginLeft: '37%' }}>
                        <div class="required field">
                            <div class="ui input">
                                <Form.Input label='First Name' name='firstName' placeholder='First Name' width={7} onChange={this.onTextChange} required />
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="required field" style={{ marginLeft: '37%' }}>
                            <div class="ui input">
                                <Form.Input label='Last Name' name='lastName' placeholder='Last Name' width={7} onChange={this.onTextChange} required />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginLeft: '37%' }}>
                        <div class="field">
                            <div class="required field">

                                <div class="ui input">
                                    <Form.Input label='Username' name='username' placeholder='Username' width={7} onChange={this.onTextChange} required />
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="required field">
                                <div class="ui input">
                                    <Form.Input type='password' label='Password' name='password' placeholder='Password' width={7} onChange={this.onTextChange} required />
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <div class="required field">
                                <div class="ui input">
                                    <Form.Input label='Email' name='email' placeholder='joe@schmoe.com' width={7} onChange={this.onTextChange} required />
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="required field">
                                <div class="ui input">
                                    <Form.Input label='Phone' type='tel' name='phone' placeholder='0912345678' width={7} onChange={this.onTextChange} required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <Segment inverted>
                        <Button className='ui white button' inverted color='brown' content='Back' href='/' />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type='submit' className='ui white button' inverted color='brown' onClick={this.onSubmit} >
                            Submit
                  </Button>
                    </Segment>
                </Form>
            </div>

        )
    }
}
export default Register;

