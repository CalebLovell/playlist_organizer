import React from 'react';

function PlaylistSlot(props) {
    return (
        <div className="stuff">
            <div className="thingy">
                <div className="song-number">{props.songTitle}</div>
                <div className="song-middle-div">
                    <div className="song-name">{props.songName}</div>
                    <div className="song-artist">{props.songArtist}</div>
                </div>
                <div className="song-time">{props.songTitle}</div>
            </div>
        </div>
    );
};

export default PlaylistSlot;