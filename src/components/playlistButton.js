import React, { Component } from 'react'

class PlaylistButton extends Component {
    render() {
        return (
            <button class="playlist-buttons">
                {this.props.playlistNumber}
            </button>
        )
    };
};

export default PlaylistButton;