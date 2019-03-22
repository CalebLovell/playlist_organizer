import React, { Component } from 'react'
import PlaylistSlot from './PlaylistSlot';

class OldPlaylist extends Component {
    render() {
        let mappedSongs = this.props.oldSongsList.map((song, i) => {
            return (
                <PlaylistSlot key={i} songNumber={song.id} songTitle={song.title}
                songArtist={song.artist} songTime={song.time} />
            )
        })
        
        return (
            <div className="right-container">
                <div className="old-playlist">
                    <div className="table">
                        {mappedSongs}
                    </div>
                </div>
            </div>
        )
    };
};

export default OldPlaylist;