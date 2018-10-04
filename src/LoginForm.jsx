import React, { Component } from "react";
import { login } from "./auth";

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        error: false
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    handleClick = event => {
        event.preventDefault();

        const { email, password } = this.state;

        login(email, password).then(ok => {
            if (ok) {
                this.props.onLogin();
            } else {
                this.setState({ error: true });
            }
        });
    };

    render() {
        const { email, password, error } = this.state;

        return (
            <form>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <p className="help is-danger">
                        {error && "Invalid credentials"}
                    </p>
                    <div className="control">
                        <button
                            className="button is-link"
                            onClick={this.handleClick}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default LoginForm;
