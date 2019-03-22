import React, { Component } from 'react'

class AddButton extends Component {
    render() {
        return (
            <button className="top-buttons" onClick={() => this.props.addSong()}>
                &nbsp;&nbsp;Add&nbsp;&nbsp;
            </button>
        )
    };
};

export default AddButton;