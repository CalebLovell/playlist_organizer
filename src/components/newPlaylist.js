import React, { Component } from 'react';
import PlaylistSlot from './PlaylistSlot';

class NewPlaylist extends Component {
    render() {
        let mappedSongs = this.props.newSongsList.map((song, i) => {
            return (
                <PlaylistSlot key={i} songNumber={song.id} songTitle={song.title}
                songArtist={song.artist} songTime={song.time} />
            )
        })

        return (
            <div className="left-container">
                <div className="new-playlist">
                    <div className="table">
                        {mappedSongs}
                    </div>
                </div>
            </div>
        )
    };
};

export default NewPlaylist;