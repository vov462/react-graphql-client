import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isLoggedIn, logout } from "./auth";
import CompanyDetails from "./CompanyDetails";
import LoginForm from "./LoginForm";
import JobBoard from "./JobBoard";
import JobDetails from "./JobDetails";
import JobForm from "./JobForm";
import NavBar from "./NavBar";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { loggedIn: isLoggedIn() };
    }

    handleLogin = () => {
        this.setState({ loggedIn: true });

        this.router.history.push("/");
    };

    handleLogout = () => {
        logout();

        this.setState({ loggedIn: false });

        this.router.history.push("/");
    };

    render() {
        const { loggedIn } = this.state;
        return (
            <Router ref={router => (this.router = router)}>
                <div>
                    <NavBar loggedIn={loggedIn} onLogout={this.handleLogout} />
                    <section className="section">
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={JobBoard} />
                                <Route
                                    path="/companies/:companyId"
                                    component={CompanyDetails}
                                />
                                <Route
                                    exact
                                    path="/jobs/new"
                                    component={JobForm}
                                />
                                <Route
                                    path="/jobs/:jobId"
                                    component={JobDetails}
                                />
                                <Route
                                    exact
                                    path="/login"
                                    render={() => (
                                        <LoginForm onLogin={this.handleLogin} />
                                    )}
                                />
                            </Switch>
                        </div>
                    </section>
                </div>
            </Router>
        );
    }
}

export default App;
