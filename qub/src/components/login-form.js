import React, { PureComponent } from 'react';
import store from 'store';
import styled from "styled-components/macro";
import { Form, Button } from "react-bootstrap";
import { Redirect, withRouter } from 'react-router-dom';
import isLoggedIn from './is_logged_in';

class LoginForm extends PureComponent {
    constructor(props) {
        super(props);
        this.handleConnexion = this.handleConnexion.bind(this);
    }
    handleConnexion() {
        /*         let connecter = false; */
        const { history } = this.props;

        const email = document.getElementById('userEmail').value;
        const password = document.getElementById('userPassword').value;

        if (email.toLowerCase() === "user@a.com" && password === "a") {
            /*             connecter = true; */

            store.set('loggedIn', true);
            history.push('/home');
        }
    }

    render() {

        if (isLoggedIn()) {
            return <Redirect to='/home' />
        }

        return (
            <Wrapper>
                <Form>
                    <fieldset>
                        <Form.Group controlId="userEmail">
                            <Form.Label>
                                Email
                                <span className='input-required'> *</span>
                            </Form.Label>
                            <Form.Control type="email"
                                placeholder="email@user.com"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="userPassword">
                            <Form.Label>
                                Mot de passe
                                <span className='input-required'> *</span>
                            </Form.Label>
                            <Form.Control type="password"
                                placeholder="Mot de passe"
                                required />
                        </Form.Group>
                        <Form.Control.Feedback>
                            Votre adresse et mot de passe sont incorrects.
                        </Form.Control.Feedback>
                    </fieldset>
                    <Button variant="primary" type="submit" onClick={this.handleConnexion}>
                        Connexion
                    </Button>
                </Form>
            </Wrapper >
        )
    }
}

export default withRouter(LoginForm);
const Wrapper = styled.div``