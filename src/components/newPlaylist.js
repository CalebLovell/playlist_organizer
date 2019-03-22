import React, { Component } from 'react';
import axios from 'axios';
import PlaylistSlot from './PlaylistSlot';

class NewPlaylist extends Component {
    constructor() {
        super();

        this.state = {
            newSongsList: [{}],
        };
    };

    componentDidMount() {
        axios
            .get(`/api/playlist/`)
            .then(res => {
                this.setState({
                    newSongsList: res.data,
                })
            })
            .catch(err => {
                console.log(`there was an error: ${err}`)
            })
    }

    render () {
        const mappedSongs = this.state.newSongsList.map((song, i) => {
            return (
                <PlaylistSlot key={i} songNumber={song.number} songTitle={song.title} songArtist={song.artist} songTime={song.time}/>
            )
        })
        
        return (
            <div className="left-container">
                <div className="new-playlist">
                    <div className="table">
                        <div className="stuff">
                            <div className="thingy">
                                <div className="song-number">{this.state.newSongsList[0].id}</div>
                                    <div className="song-middle-div">
                                        <div className="song-name">{this.state.newSongsList[0].title}</div>
                                        <div className="song-artist">{this.state.newSongsList[0].artist}</div>
                                    </div>
                                <div className="song-time">{this.state.newSongsList[0].time}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default NewPlaylist;