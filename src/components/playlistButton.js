import React, { Component } from 'react';

class PlaylistButton extends Component {
    render() {
        return (
            <button
                className="playlist-buttons"
                onClick={() => this.props.addOldSongsList(this.props.playlistTitle)}
            >
                {this.props.playlistTitle}
            </button>
        )
    };
};

export default PlaylistButton;