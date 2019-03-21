import React, { Component } from 'react'

class OldPlaylist extends Component {
    constructor() {
        super();

        this.state = {
            oldSongList: [],
        };
    };

    render() {
        return (
            <div className="right-container">
                <div className="old-playlist">

                </div>
            </div>
        )
    };
};

export default OldPlaylist;