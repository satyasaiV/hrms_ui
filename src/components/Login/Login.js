import React, { Component } from 'react';
import "./Login.css";
import logo from "../../assets/logo.png";
import * as Constants from '../../Constant';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Layout from '../Layout/Layout';
const URL = Constants.URL;

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            token: false,
            error: '',
            fieldsEmpty: false,
        };
        this.handlechange = this.handlechange.bind(this);
        this.login = this.login.bind(this);
    };
    handlechange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    login() {
        if (this.state.username === "" || this.state.password === "") {
            this.setState({ fieldsEmpty: true });
        } else {
            this.setState({ fieldsEmpty: false });
            axios.post(URL + `/api/login_request`, { username: this.state.username, password: this.state.password })
                .then(res => this.setState({ token: true }))
                .catch(err => {
                    if (err.response) {
                        this.setState({ error: err.response.data.error });
                    } else {
                        this.setState({ error: 'Unable to access the server' });
                    }
                });
        }
    }
    render() {
        if ( this.state.token) {
            return (
                <div>
                    <div className="logo-position">
                        <img className="logo-size" src={logo} alt="logo" />
                    </div>
                    <form className="login-form">
                        <div className="card">
                            <div className="card-header">
                                <h5>Login</h5>
                            </div>
                            <div className="card-body">
                                <div className="inputs">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <FontAwesomeIcon icon={faUserCircle} className="input-icon" />
                                        </div>
                                        <div>
                                            <input type="text" className="textfield" placeholder="Employee ID" id="EmployeeId" name="username" value={this.state.username} onChange={this.handlechange} />
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <FontAwesomeIcon icon={faKey} className="input-icon" />
                                        </div>
                                        <div>
                                            <input type="password" className="textfield" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlechange} />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="buttons btn" variant="contained" size="medium" onClick={this.login}> Login </button>
                            </div>
                        </div>
                    </form>
                    <div className="alert-message">
                        {this.state.fieldsEmpty ? <p className="fields-empty-error">please enter credentials</p> : <p className="error-text"> {this.state.error} </p>}
                    </div>
                </div>
            )
        }
        else {
            return (
                <Layout />
            )
        }
    }
}
export default Login

