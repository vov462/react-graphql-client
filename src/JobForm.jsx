import React, { Component } from "react";
import { createJob } from "./requests";

class JobForm extends Component {
    state = {
        title: "",
        description: ""
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    handleClick = event => {
        event.preventDefault();

        const { title, description } = this.state;

        createJob({ title, description }).then(job => {
            this.props.history.push(`/jobs/${job.id}`);
        });
    };

    render() {
        const { title, description } = this.state;

        return (
            <div>
                <h1 className="title">New Job</h1>
                <div className="box">
                    <form>
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea
                                    className="input"
                                    style={{ height: "10em" }}
                                    name="description"
                                    value={description}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button
                                    className="button is-link"
                                    onClick={this.handleClick}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default JobForm;
