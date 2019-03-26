import React, { Component } from 'react'

class DeleteButton extends Component {
    render() {
        return (
            <button
                className="top-buttons"
                onClick={() => this.props.deleteSong()}
                >
                Delete
            </button>
        )
    };
};

export default DeleteButton;