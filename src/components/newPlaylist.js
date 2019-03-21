import React, { Component } from 'react'

class NewPlaylist extends Component {
    constructor() {
        super();

        this.state = {
            newSongList: [],
        };
    };

    render() {
        return (
            <div className="left-container">
                <div className="new-playlist">
                    <p>Title: Fake Title Artist: Fake Artist Time: 3:00</p>
                    <p>Title: Fake Title Artist: Fake Artist Time: 3:00</p>
                    <p>Title: Fake Title Artist: Fake Artist Time: 3:00</p>
                    <p>Title: Fake Title Artist: Fake Artist Time: 3:00</p>
                    <p>Title: Fake Title Artist: Fake Artist Time: 3:00</p>
                </div>
            </div>
        )
    };
};

export default NewPlaylist;