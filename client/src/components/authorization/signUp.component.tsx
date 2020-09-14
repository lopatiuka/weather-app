import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userModel, userStore } from '../../stores/user.store';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

@observer
export class SignUpComponent extends React.Component{
    render(){
        return <div className = "authorization">
                <NavLink to = "/login" className = "link">Login</NavLink> 
            <h3>Sign Up</h3>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value = { userModel.email }
                      onChange = { e => userModel.setEmail( e.target.value ) } />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value = { userModel.password }
                      onChange = { e => userModel.setPassword( e.target.value ) } />
                </Form.Group>
                <Button variant="primary" type="submit" onClick = { e => userStore.signUp( e, userModel.email, userModel.password ) }>
                    Sign Up
                </Button>
                </Form>
        </div>
    }
}